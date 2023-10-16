import styles from './PageError.module.scss';

export function PageError() {
    return (
        <div className={styles.error_holder}><h1>Oops! Something went wrong</h1></div>
    );
}
