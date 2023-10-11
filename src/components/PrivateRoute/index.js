import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isLogged } = useSelector(state => state.auth);
    useEffect(() => {
        if (!isLogged) {
            navigate('/sign-in');
        }
    }, [isLogged]);
    return children;
}

export default PrivateRoute;