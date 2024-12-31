import {useTheme} from "@/app/providers/ThemeProvider";
import ToggleThemePNG from '@/shared/assets/icon/toggleTheme.png'
import Button, {ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import React from "react";




export function ToggleTheme() {
    const {toggleTheme} = useTheme()
    return (
            <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
                <img src={ToggleThemePNG} alt=""/>
            </Button>

    );
}

export default ToggleTheme;