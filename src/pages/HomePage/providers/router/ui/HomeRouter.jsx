import { NoteEdit } from 'pages/NoteEdit';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { homeRouteConfig } from 'shared/config/routeConfig/routeConfig';
import { Graph } from 'widgets/GraphView';

export function HomeRouter() {
    console.log(Object.values(homeRouteConfig).map(({ path, element }) => path));
    return (
        <Suspense>
            <Routes>
                {Object.values(homeRouteConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
}
