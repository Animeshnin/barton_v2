import {Suspense} from "react";
import {Routes} from "react-router-dom";
import {Route} from "react-router";

import {routerConfig} from "@/shared/config/routeConfig/routeConfig.tsx";
import PageLoader from "@/widgets/PageLoader/ui/PageLoader.tsx";

function AppRouter() {
    return (
        <Suspense fallback={<PageLoader/>}>
            <div className={'page-container'}>
                <Routes>
                    {Object.values(routerConfig).map(({path, element}) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
}

export default AppRouter;