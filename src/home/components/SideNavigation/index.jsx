import { useResizeSide } from '../../hooks/useResizeSide';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';

const SideNavigation = () => {
    const { onMouseDown, currentX, moving } = useResizeSide();
    return (
        <section 
            style={{width: currentX}}
            className={styles.side_holder}>
                <span 
                    onMouseDown={onMouseDown}
                    className={clsx(styles.side_resizer, moving && styles.side_resizer_moving)}/>
        </section>
    )
};

export default SideNavigation;