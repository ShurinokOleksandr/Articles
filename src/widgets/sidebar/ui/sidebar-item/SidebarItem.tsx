import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/AppLink';
import { memo } from 'react';
import { SidebarItemsType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item:SidebarItemsType;
    collapsed:boolean;
}
export const SidebarItem = memo(({
    item, collapsed,
}:SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
