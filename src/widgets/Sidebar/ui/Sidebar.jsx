import clsx from 'clsx';
import { useResize } from '../hooks/useResize';
import styles from './style.module.scss';
import { Folders } from './Folders';
import { Categories } from './Categories';

export function Sidebar() {
    const { onMouseDown, currentX, moving } = useResize();

    return (
        <section
            style={{ width: currentX }}
            className={styles.side_holder}>
            <Folders />
            <Categories />
            <span
                onMouseDown={onMouseDown}
                className={clsx(styles.side_resizer, moving && styles.side_resizer_moving)} />
        </section>
    );
}
