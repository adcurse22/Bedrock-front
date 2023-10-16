import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function SignupPage() {
    const navigate = useNavigate();
    const { isLogged } = useSelector((state) => state.session);
    useEffect(() => {
        if (isLogged) {
            navigate('/');
        }
    }, [isLogged, navigate]);
    return (
        <div>
            <h1>Sign up</h1>
        </div>
    );
}

export default SignupPage;
