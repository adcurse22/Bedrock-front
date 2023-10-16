import { logout } from 'entities/session';
import { useDispatch, useSelector } from 'react-redux';
import Logo from 'src/assets/logo.png';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

export function Header() {
    const dispatch = useDispatch();
    const { isLogged } = useSelector((state) => state.session);

    function handleLogout() {
        dispatch(logout());
    }
    if (!isLogged) {
        return null;
    }
    return (
        <header className={styles.header}>
            <div className={styles.left_header}>
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </div>
            <div className={styles.right_header}>
                <button type="button" onClick={handleLogout}>Logout</button>
            </div>
        </header>
    );
}
