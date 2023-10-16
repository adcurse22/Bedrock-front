import { Graph } from 'widgets/GraphView';
import { Sidebar } from 'widgets/Sidebar';
import { HomeRouter } from '../providers/router';

function HomePage() {
    return (
        <div className="home-page">
            <Sidebar />
            <HomeRouter />
        </div>
    );
}

export default HomePage;
