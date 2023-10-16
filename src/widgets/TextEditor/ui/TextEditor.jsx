/* eslint-disable no-new */
/* eslint-disable no-param-reassign */
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import {
    useEffect, useRef, useCallback, useState 
} from 'react';
import styles from './TextEditor.module.scss';

export function TextEditor() {
    const [quill, setQuill] = useState(null);

    useEffect(() => {
        if (quill === null) {
            return;
        }
        quill.on('text-change', (delta, oldDelta, source) => {
            console.log('Delta: ', delta);
            console.log('Old delta: ', oldDelta);
            console.log('Source: ', source);
            console.log('Content: ', quill.getContents());
            // <--- Getting content
            // quill.getContents();
            // <--- Setting content
            // quill.setContents();
            // <--- Updating content
            // quill.updateContents();
        });
    }, [quill]);

    const wrapperRef = useCallback((wrapper) => {
        if (wrapper === null) {
            return;
        }
        wrapper.innerHTML = '';
        const editor = document.createElement('div');
        editor.className = styles.editor_wrapper;
        wrapper.append(editor);
        const quillInstance = new Quill(wrapper, { theme: 'snow' });
        setQuill(quillInstance);
    }, []);

    useEffect(() => {

    }, []);
    return (
        <div className={styles.editor_wrapper} ref={wrapperRef}>Text editor</div>
    );
}
