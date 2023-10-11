import { logout } from "src/auth";
import { useDispatch, useSelector } from "react-redux";
import styles from './style.module.scss';
import Logo from 'src/assets/logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const { isLogged } = useSelector(state => state.auth);

    function handleLogout() {
        dispatch(logout());
    }

    return (
        <header className={styles.header}>
            <div className={styles.left_header}>
                <Link to="/">
                    <img src={Logo} alt="logo"/>
                </Link>
            </div>
            <div className={styles.right_header}>
                <button type="button" onClick={handleLogout}>Logout</button>
            </div>
        </header>
    )
};

export default Header;