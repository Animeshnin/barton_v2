import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './NavBar.module.scss'
import AppLink, {AppLinkTheme} from "@/shared/ui/AppLink/AppLink.tsx";

interface NavbarProps {
    className?: string;
}

export function Navbar({className}: NavbarProps) {
    return (
        <nav className={classNames(cls.Navbar, {} ,[className!])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'} className={cls.mainLink}>about</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY}  to={'/'} >main</AppLink>
            </div>

        </nav>
    );
}

export default Navbar;
