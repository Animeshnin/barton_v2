import {useTheme} from "@/app/providers/ThemeProvider";
import ToggleThemePNG from '@/shared/assets/icon/toggleTheme.png'
import Button, {ThemeButton} from "@/shared/ui/Button/Button.tsx";




export function ToggleTheme() {
    const {toggleTheme} = useTheme()
    return (
            <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
                <img src={ToggleThemePNG} alt=""/>
            </Button>

    );
}

export default ToggleTheme;