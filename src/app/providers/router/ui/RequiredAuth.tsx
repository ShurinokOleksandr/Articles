import { useSelector } from 'react-redux';
import { getUserData } from 'entities/user';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import React from 'react';

export function RequiredAuth({ children }: any) {
    const auth = useSelector(getUserData);

    const location = useLocation();
    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
    return children;
}
