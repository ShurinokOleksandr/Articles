import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import { Text, TextTheme } from 'shared/ui/text/Text';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import { getLoginState } from '../../../auth-by-username/modal/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../modal/services/loginByUsername/loginByUsername';
import { loginActions } from '../../modal/slice/userSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                key={'username'}
                autofocus
                type="text"
                value={username}
                onChange={onChangeUsername}
                className={cls.input}
                placeholder={t('Введите username')}
            />
            <Input
                key={'password'}
                type="text"
                value={password}
                onChange={onChangePassword}
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
                theme={ThemeButton.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
