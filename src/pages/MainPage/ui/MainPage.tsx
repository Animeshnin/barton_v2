import {useTranslation} from "react-i18next";

function MainPage() {
    const {t} = useTranslation();
    return (
        <>{t('Основная страница')}</>
    );
}

export default MainPage;