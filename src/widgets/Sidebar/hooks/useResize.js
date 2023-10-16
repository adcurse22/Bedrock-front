import { useState, useEffect } from 'react';

function getSideNavigationWidth() {
    const data = {
        sourceX: null,
        currentX: '20%'
    };
    if (localStorage.getItem('side-navigation-width')) {
        data.currentX = JSON.parse(localStorage.getItem('side-navigation-width'));
        return data;
    }
    return data;
}

export const useResize = () => {
    const [sideWidth, setSideWidth] = useState(getSideNavigationWidth);
    const [saveWidthTimeout, setSaveWidthTimeout] = useState(null);
    const [moving, setMoving] = useState(false);

    function resizerMouseMoveHandler(e) {
        clearTimeout(saveWidthTimeout);
        setSideWidth((prev) => {
            const maxWidth = (window.innerWidth / 100) * 30;
            const newWidth = maxWidth > e.clientX ? e.clientX : maxWidth;
            setSaveWidthTimeout(() => (setTimeout(() => {
                localStorage.setItem('side-navigation-width', JSON.stringify(prev.sourceX - (prev.sourceX - e.clientX)));
            }, 500)));
            return { ...prev, currentX: prev.sourceX - (prev.sourceX - newWidth) };
        });
    }

    function resizerMouseUpHandler(e) {
        setSideWidth((prev) => ({ ...prev, sourceX: null }));
        document.removeEventListener('mousemove', resizerMouseMoveHandler);
        document.removeEventListener('mouseup', resizerMouseUpHandler);
        localStorage.setItem('side-navigation-width', JSON.stringify(sideWidth.currentX));
        setMoving(false);
    }

    function resizerMouseDownHandler(e) {
        setSideWidth((prev) => ({ ...prev, sourceX: e.clientX }));
        document.addEventListener('mousemove', resizerMouseMoveHandler);
        document.addEventListener('mouseup', resizerMouseUpHandler);
        setMoving(true);
    }

    useEffect(() => () => {
        document.removeEventListener('mousemove', resizerMouseMoveHandler);
        document.removeEventListener('mouseup', resizerMouseUpHandler);
    }, []);
    return { onMouseDown: resizerMouseDownHandler, currentX: sideWidth.currentX, moving };
};
