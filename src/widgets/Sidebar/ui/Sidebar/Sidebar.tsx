import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Sidebar.module.scss'
import {ToggleTheme} from "@/widgets/ToggleTheme";
import React from "react";
import Button from "@/shared/ui/Button/Button.tsx";
import {LangSwitcher} from "@/widgets/LangSwither";
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
            <Button onClick={handleToggleTheme}>collapsed</Button>
            <div className={cls.switcher}>
                <ToggleTheme/>
                <LangSwitcher/>

            </div>
        </aside>
    );
}

export default Sidebar;