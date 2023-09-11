import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRoute = () => {
    return (
        <Suspense fallback={<div>...Loading</div>}>
            <Routes>
                {
                    Object.values(routeConfig).map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))
                }
            </Routes>
        </Suspense>
    );
};