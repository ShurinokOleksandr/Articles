import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/theme-switcher";

interface NavbarProps {
    className?:string
}
export const Navbar = ({className}:NavbarProps) => {
 return (
  <div className={classNames(cls.Navbar,{},[className])}>
      <ThemeSwitcher/>
      <div className={classNames(cls.links)}>
          <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLink)} to={'/'}>Main</AppLink>
          <AppLink to={'/about'}>About</AppLink>
      </div>
  </div>
 );
};

