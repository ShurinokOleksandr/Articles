import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/modal/Modal';
import { Suspense } from 'react';
import { PageLoader } from 'shared/ui/page-loader/PageLoader';
import { LoginFormAsync } from '../login-form/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<PageLoader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
