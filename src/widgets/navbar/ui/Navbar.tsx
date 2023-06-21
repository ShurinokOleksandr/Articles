import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/modal/Modal';
import { Button } from 'shared/ui/button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?:string
}
export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation();

    const [authModal, setAuthModal] = useState(false);

    const toggleModal = useCallback(() => {
        setAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={toggleModal}
                className={classNames(cls.links)}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={authModal} onClose={toggleModal}>
                TExt
            </Modal>
        </div>
    );
};
