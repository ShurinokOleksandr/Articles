import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import LangIcon from 'shared/assets/icons/LangIcon';

interface LangSwitcherProps {
    className?:string;
}
export const LangSwitcher = memo(({ className }:LangSwitcherProps) => {
    const { i18n } = useTranslation();
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
});
