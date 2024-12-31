import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Sidebar.module.scss'
import {ToggleTheme} from "@/widgets/ToggleTheme";
import React from "react";
import Button, {ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import {LangSwitcher} from "@/widgets/LangSwither";
import AppLink, {AppLinkTheme} from "@/shared/ui/AppLink/AppLink.tsx";
import {RouterPath} from "@/shared/config/routeConfig/routeConfig.tsx";

interface SidebarProps {
    className?: string;
}

export const Sidebar =({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const handleToggleTheme = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <aside className={classNames(cls.Sidebar, { [cls.collapsed] : collapsed}, [className!])}>
            <Button
                className={cls.collapsBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={handleToggleTheme}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={RouterPath.about} className={cls.mainLink}>about</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY}  to={RouterPath.main} >main</AppLink>
            </div>
            <div className={cls.switcher}>
                <ToggleTheme/>
                <LangSwitcher short={collapsed}/>

            </div>
        </aside>
    );
}

export default Sidebar;