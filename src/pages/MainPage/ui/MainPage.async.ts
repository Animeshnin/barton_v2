import React from "react";

export const MainPageAsync = React.lazy(() =>
    new Promise(resolve =>
// @ts-ignore

    setTimeout(() => resolve(import('./MainPage.tsx')), 1000)
))