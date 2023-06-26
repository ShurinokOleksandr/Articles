import { classNames } from 'shared/lib/classNames/classNames';
import Sun from 'shared/assets/icons/sun.svg';
import Moon from 'shared/assets/icons/cloud_moon.svg';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { Theme, useTheme } from 'app/providers/theme-provider';
import { memo } from 'react';

interface ThemeSwitcherProps {
    className?:string
}
export const ThemeSwitcher = memo(({ className }:ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {
                theme === Theme.LIGHT
                    ? <Sun width={40} height={40} fill="#333333" />
                    : <Moon width={40} height={40} fill="white" />
            }
        </Button>

    );
});
