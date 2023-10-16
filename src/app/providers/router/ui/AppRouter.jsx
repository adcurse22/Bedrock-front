import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

function AppRouter() {
    return (
        <Suspense>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;