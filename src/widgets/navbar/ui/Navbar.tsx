import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/auth-by-username';
import { getUserData, userActions } from 'entities/user';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?:string
}
export const Navbar = memo(({ className }:NavbarProps) => {
    const { t } = useTranslation();

    const [authModal, setAuthModal] = useState(false);

    const dispatch = useDispatch();

    const authData = useSelector(getUserData);

    const onCloseModal = useCallback(() => {
        setAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.setLogOut());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    onClick={onLogOut}
                    className={classNames(cls.links)}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                className={classNames(cls.links)}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={authModal}
                onClose={onCloseModal}
            />
        </div>
    );
});
