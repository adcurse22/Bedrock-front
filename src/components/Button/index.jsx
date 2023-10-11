import clsx from 'clsx';
import { forwardRef } from 'react';
import { BarLoader } from 'react-spinners';
import styles from './style.module.scss';

const Button = forwardRef(({type="button", isLoading=false, projectType="default", onClick, children, ...props}, ref) => {
    return (
        <button 
            type={type}
            className={clsx(styles.button, styles[projectType])}
            onClick={onClick}
            {...props}>
                {isLoading
                ? <BarLoader height={5}/>
                : children}
        </button>
    )
});

export default Button;