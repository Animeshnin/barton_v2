import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Modal.module.scss'
import React, {KeyboardEvent, ReactNode, useEffect, useState} from "react";
import {Portal} from "@/shared/ui/Portal/Portal.tsx";
import {useTheme} from "@/app/providers/ThemeProvider";

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}



export const Modal =({className, children, isOpen, onClose, lazy}: ModalProps) => {

    const [isMounted, setIsMounted] = useState(false)
    const {theme} = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: !isOpen,
    }


    const onContentClick = (e: React.MouseEvent) =>{
        e.stopPropagation()
    }

    const onKeyDown = (e: KeyboardEvent<Element>) => {
        if (e.key === 'Escape') {
            onClose()
        }
    }


    useEffect(() => {
        if(isOpen){
            setIsMounted(true)
        }
    }, [isOpen]);

    if (lazy && isMounted) {
        return null
    }

    useEffect(() => {
        if(isOpen){
            // @ts-ignore
            window.addEventListener('keydown', (e) => onKeyDown(e))
        }

        return () => {
            // @ts-ignore
            window.removeEventListener('keydown', (e) => onKeyDown(e))
        }
    }, [isOpen])


    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className!, cls[theme]])}>
                <div onClick={onClose} className={cls.overlay}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
}

export default Modal;