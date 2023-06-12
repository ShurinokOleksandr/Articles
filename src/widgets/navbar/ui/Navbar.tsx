import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/theme-switcher";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?:string
}
export const Navbar = ({className}:NavbarProps) => {
    const {t,i18n} = useTranslation()

    return (
  <div className={classNames(cls.Navbar,{},[className])}>
      <div className={classNames(cls.links)}>
          <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLink)} to={'/'}>{t('Главная')}</AppLink>
          <AppLink to={'/about'}>{t('Про нас')}</AppLink>
      </div>
  </div>
 );
};

