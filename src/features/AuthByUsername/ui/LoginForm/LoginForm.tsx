import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './LoginForm.module.scss'
import {useCallback} from "react";
import {useTranslation} from "react-i18next";
import Input from "@/shared/ui/Input/Input.tsx";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername.ts";
import Text, {TextTheme} from "@/shared/ui/Text/Text.tsx";

interface LoginFormProps {
    className?: string;
}

export const LoginForm =({className}: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {username, password, error, isLoading} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password])
    return (

        <div className={classNames(cls.LoginForm, {}, [className!])}>
            <Text title={"Форма авторизации"}/>
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <Input autoFocus={true} type={'text'} className={cls.input} placeholder={'Введите username'} value={username} onChange={onChangeUsername} />
            <Input type={'text'} className={cls.input} placeholder={'Введите пароль'} value={password} onChange={onChangePassword} />
            <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.loginBtn} >{t('Войти')}</Button>
        </div>
    );
}

