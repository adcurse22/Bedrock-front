import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Signin } from "../auth";

const SigninPage = () => {
    const navigate = useNavigate();
    const { isLogged } = useSelector(state => state.auth);
    useEffect(() => {
        if (isLogged) {
            navigate('/');
        }
    }, [isLogged, navigate])
    return (
        <Signin />
    )
};

export default SigninPage;