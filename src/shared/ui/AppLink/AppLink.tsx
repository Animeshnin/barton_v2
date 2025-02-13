import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({className, children, theme = AppLinkTheme.PRIMARY, to, ...otherProps}) => {
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className!, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
}

export default AppLink;