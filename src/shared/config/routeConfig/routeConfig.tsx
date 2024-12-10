import {MainPage} from "@/pages/MainPage";
import React from "react";
import {AboutPage} from "@/pages/AboutPage";
import {NotFoundPage} from "@/pages/NotFoundPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUNDPAGE = 'notFound',
}


interface RouterConfig {
    path: string;
    element: React.ReactNode;
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUNDPAGE]: '*',
}

export const routerConfig: Record<AppRoutes, RouterConfig> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage/>
    },
    [AppRoutes.NOTFOUNDPAGE] : {
        path: RouterPath.notFound,
        element: <NotFoundPage/>
    }
}