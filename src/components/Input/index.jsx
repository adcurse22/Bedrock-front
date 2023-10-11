import clsx from "clsx";
import { forwardRef } from "react";
import styles from './style.module.scss';

const Input = forwardRef(({type='text', isInvalid=true, onChange, projectType='default', ...props}, ref) => {
    return <input ref={ref} type={type} onChange={onChange} className={clsx(styles.input, styles[projectType], isInvalid && styles.invalid)} {...props}/>
});

export default Input;