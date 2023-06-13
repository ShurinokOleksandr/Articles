import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?:string
}
export const Sidebar = ({ className }:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={() => setCollapsed((prev) => !prev)}>
                Toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
