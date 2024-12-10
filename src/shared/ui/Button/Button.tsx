import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Button.module.scss'
import React, {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = "clear",
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    theme?: ThemeButton;
}

export const  Button: FC<ButtonProps> = ({className, children, theme, ...otherProps}) => {
    return (
            <button className={classNames('', {}, [cls[theme!]])} {...otherProps}>
                {children}
            </button>

    );
}

export default Button;