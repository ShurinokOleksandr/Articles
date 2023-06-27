import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    MutableRefObject,
    useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?:boolean;
}
export const Modal = (props:ModalProps) => {
    const {
        className, children, isOpen, onClose, lazy,
    } = props;

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [isOpen, onKeyDown]);

    const onClickPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onClickPrev}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
