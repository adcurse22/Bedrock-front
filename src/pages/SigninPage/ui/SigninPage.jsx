import { useEffect, useState } from 'react';
import { Input, Button } from 'shared/components';
import Logo from 'assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sessionApi } from 'entities/session';
import styles from './style.module.scss';

const initialSigninForm = {
    email: '',
    password: ''
};

const initialErrorForm = {
    email: false,
    password: false
};

function SigninPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, isLogged } = useSelector((state) => state.session);
    useEffect(() => {
        if (isLogged) {
            navigate('/');
        }
    }, [isLogged, navigate]);
    const [form, setForm] = useState(initialSigninForm);
    const [errorForm, setErrorForm] = useState();

    const handleChangeForm = ({ target }) => {
        setForm((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(sessionApi.signin(form));
    };

    return (
        <div className={styles.signin_holder}>
            <div className={styles.form_holder}>
                <form className={styles.form} onSubmit={handleSubmitForm}>
                    <h1 className={styles.title}>Sign in</h1>
                    <div className={styles.input_holder}>
                        <Input
                            type="email"
                            projectType="auth"
                            id="email"
                            name="email"
                            value={form.email}
                            isInvalid={false}
                            onChange={handleChangeForm} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={styles.input_holder}>
                        <Input
                            type="password"
                            projectType="auth"
                            id="password"
                            isInvalid={false}
                            name="password"
                            value={form.password}
                            onChange={handleChangeForm} />
                        <label htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className={styles.button_holder}>
                        <Button
                            type="submit"
                            isLoading={status === 'loading sign in'}
                            projectType="auth-submit">
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
            <div className={styles.image_holder}>
                <img className={styles.logo} src={Logo} alt="logo" />
            </div>
        </div>
    );
}

export default SigninPage;
