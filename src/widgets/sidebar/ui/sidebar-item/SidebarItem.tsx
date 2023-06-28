import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/AppLink';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/user';
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
    const isAuth = useSelector(getUserData);

    if (item.authOnly && !isAuth) {
        return null;
    }

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
