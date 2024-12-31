import React, {useState} from "react";
import Input from "@/shared/ui/Input/Input.tsx";
import {useTranslation} from "react-i18next";

function MainPage() {
    const {t} = useTranslation();

    const [value, setValue] = useState("");


    const onChange = (val: string) => {
        setValue(val);
    }

    return (
        <>
            {t('Основная страница')}
            <Input value={value} onChange={onChange} placeholder={"Введите текст"}/>
        </>
    );
}

export default MainPage;