import React from 'react'
import {Route } from 'react-router-dom';
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Logiin";



const routes =  [
    {
        path: "/",
        component: Login
    },
    {
        path: "/home",
        component: Home
    }
];
const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        exact
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

const routeConfig = routes.map((route, i) => {
    return <RouteWithSubRoutes key={i} {...route} />
});
export { routeConfig };
