import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './LangSwither.module.scss'
import Button, {ThemeButton} from "@/shared/ui/Button/Button.tsx";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggle = () =>{
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }
    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.LangSwither, {}, [className!])} onClick={toggle}>
            {t('Русский')}

        </Button>
    );
}

export default LangSwitcher;