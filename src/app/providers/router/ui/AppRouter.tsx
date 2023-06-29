import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/page-loader/PageLoader';
import { RequiredAuth } from 'app/providers/router/ui/RequiredAuth';

const AppRouter = () => {
    const rendreWithWrraper = useCallback((route: AppRoutesProps) => (
        <Route
            key={route.path}
            path={route.path}
            element={(
                <div className="page-wrapper">
                    {
                        route.authOnly
                            ? <RequiredAuth>{route.element}</RequiredAuth>
                            : route.element
                    }
                </div>
            )}
        />
    ), []);
    return (
        <Suspense fallback={<PageLoader className="page-loader" />}>
            <Routes>
                {Object.values(routeConfig).map(rendreWithWrraper)}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
