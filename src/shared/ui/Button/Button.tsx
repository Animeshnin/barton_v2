import { classNames } from '../../lib/classNames/classNames.ts';
import cls from './Button.module.scss'
import React, {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme {
    CLEAR = "clear",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    theme?: ButtonTheme;
    square?: boolean;
    disabled?: boolean;
    size?: ButtonSize;

}



 const  Button: FC<ButtonProps> = ({className, children, disabled,theme, size = ButtonSize.M, square, ...otherProps}) => {

    const mods: Record<string, boolean> = {
        [cls[theme!]]: true,
        [cls.square]: square || false,
        [cls[size]]: true,
        [cls.disabled]: disabled || false
    }
    return (

            <button className={classNames(cls.Button, mods, [className!])} {...otherProps} disabled={disabled}>
                {children}
            </button>

    );
}

export default Button;