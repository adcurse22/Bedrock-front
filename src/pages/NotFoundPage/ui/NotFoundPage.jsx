import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
    return (
        <div className={styles.not_found_page}>
            <h1>Page not found!</h1>
            <Link to="/">Go to main page</Link>
        </div>
    );
}

export default NotFoundPage;
