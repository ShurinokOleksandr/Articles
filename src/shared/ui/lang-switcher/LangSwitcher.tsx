import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LangIcon from 'shared/assets/icons/LangIcon';

interface LangSwitcherProps {
    className?:string;
    short?:boolean;
}
export const LangSwitcher = ({ className, short }:LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames('', {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggleLang}
            >
                <LangIcon />
            </Button>
        </div>
    );
};
