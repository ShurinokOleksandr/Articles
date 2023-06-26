import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/store-provider';

export interface LoginByUsernameProps {
    username:string;
    password:string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/login', {
                username, password,
            });

            if (!response.data) {
                throw new Error('Empty data');
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate('/about');
            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
