import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import { Text, TextTheme } from 'shared/ui/text/Text';
import { useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getLoginUsername } from '../../modal/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../modal/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../modal/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../modal/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../modal/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../modal/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}
const initialReducers:ReducersList = {
    loginForm: loginReducer,
};
const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
        >
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
        </DynamicModuleLoader>
    );
};
export default LoginForm;
