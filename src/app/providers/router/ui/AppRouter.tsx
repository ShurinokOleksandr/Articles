import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/page-loader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/user';

const AppRouter = () => {
    const isAuth = useSelector(getUserData);
    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);
    return (
        <Suspense fallback={<PageLoader className="page-loader" />}>
            <Routes>
                {
                    routes.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<div className="page-wrapper">{element}</div>}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
