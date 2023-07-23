import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from 'src/pages/login';
import Layout from 'src/pages/layout';
import NotFound from 'src/pages/notFound';
import menuRoutesConfig from './menuRoutes';

const getSubRoutes = (subRoutesConfig) => {
    const result = [];
    subRoutesConfig.forEach(item => {
        if (item.index) {
            const indexRouteItem = {
                index: true,
                element: <Navigate to={item.path} />,
            }
            result.push(indexRouteItem as never)
        }
        const routeItem = {
            path: item.path,
            element: item.element,
            children: undefined
        };
        if (item.children) routeItem.children = getSubRoutes(item.children);
        result.push(routeItem)
    })
    return result
}

interface IAppRouteConfigItem {
    path: string,
    element: React.ReactNode,
    children?: IAppRouteConfigItem[]
}

const appRoutesConfig: IAppRouteConfigItem[] = [
    {
        path: 'login',
        element: <Login />
    },
    {
        path: '/',
        element: <Layout />,
        children: getSubRoutes(menuRoutesConfig)
    },
    {
        path: '*',
        element: <NotFound />,
    },
]

export default appRoutesConfig