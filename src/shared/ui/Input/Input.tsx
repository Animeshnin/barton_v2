import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Input.module.scss'
import React, {InputHTMLAttributes, useEffect, useRef, useState} from "react";

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HtmlInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}


export const Input = ({className, value, onChange, type, placeholder, autoFocus, ...otherProps}: InputProps) => {

    const [isFocused, setFocused] = useState<boolean>(false)
    const [caretPosition, setCaretPosition] = useState<number>(0)
    const ref = useRef<HTMLInputElement>(null)


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.currentTarget.value.length);
    }

    useEffect(() => {
        if(autoFocus) {
            setFocused(true)
            ref.current?.focus()
        }
    }, [autoFocus] )

    const onBlur = () => {
        setFocused(false)
    }

    const onFocus = () => {
        setFocused(true)
    }

    const onSelect = (e: any) => {
        setCaretPosition(e?.target.selectionStart || 0);
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )
            }
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    className={classNames(cls.input, {}, [className!])}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />

                {isFocused && (
                    <span style={{left: `${caretPosition * 7.4}px`}} className={cls.caret}></span>
                )}
            </div>

        </div>
    );
}

export default Input;