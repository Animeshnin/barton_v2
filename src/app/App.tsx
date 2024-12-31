import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {useTheme} from "@/app/providers/ThemeProvider";
import AppRouter from "./providers/router";
import {Navbar} from "@/widgets/Navbar";
import {Sidebar} from "@/widgets/Sidebar";
import {Suspense, } from "react";
import React from "react";



function App() {

    const {theme} = useTheme()


    // const [error, setError] = useState(false);

    // const clickError = () => setError(true)

    // useEffect(() => {
    //     if(error){
    //         throw new Error()
    //     }
    // }, [error])


    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>

                <Navbar/>
                <div className={'content-path'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
