import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './LoginModal.module.scss'
import React, {memo} from "react";
import Modal from "@/shared/ui/Modal/Modal.tsx";
import {LoginForm} from "../LoginForm/LoginForm";



interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = memo(({className, isOpen, onClose}: LoginModalProps) => {



    return (
        <Modal  className={classNames(cls.LoginModal, {}, [className!])} isOpen={isOpen} onClose={onClose}>
            <LoginForm/>
        </Modal>
    );
})

export default LoginModal;