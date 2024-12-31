import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './NavBar.module.scss'
import React, {useCallback, useState} from "react";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import  LoginModal from "@/features/AuthByUsername/ui/LoginModal/LoginModal.tsx";

interface NavbarProps {
    className?: string;
}

export function Navbar({className}: NavbarProps) {
    const [openModalSignUpModal, setOpenModalSignUpModal] = useState<boolean>(false);

    const onCloseModal = useCallback(() => {
        setOpenModalSignUpModal(false );
    }, [])

    const onShowModal = useCallback(() => {
        setOpenModalSignUpModal(true );
    }, [])
    return (
        <nav className={classNames(cls.Navbar, {} ,[className!])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR} onClick={onShowModal}>Войти</Button>
                <LoginModal  isOpen={openModalSignUpModal} onClose={onCloseModal}/>
            </div>

        </nav>
    );
}

export default Navbar;
