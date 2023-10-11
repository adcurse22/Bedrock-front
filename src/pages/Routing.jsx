import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { Header, PrivateRoute } from "../components";
import HomePage from './HomePage';
import SigninPage from "./SigninPage";
import SignupPage from "./SignupPage";


const Routing = () => {
    const { isLogged } = useSelector(state => state.auth);
    return (
        <>
            {isLogged && <Header />}
            <Routes>
                <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
                <Route path="/sign-in" element={<SigninPage />}/>
                <Route path="/sign-up" element={<SignupPage />}/>
                <Route path="/*" element={<h1>Page not found!</h1>}/>
            </Routes>
        </>
    )
}
export default Routing;