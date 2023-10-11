import { SideNavigation } from "../home";
import { useSelector } from "react-redux";

const HomePage = () => {
    const { isLogged } = useSelector(state => state.auth);
    return (
        <div className="home-page">
            <SideNavigation />
        </div>
    );
};

export default HomePage;