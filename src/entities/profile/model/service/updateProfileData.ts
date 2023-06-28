import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { validateProfile } from './validateProfile';
import { getProfileForm } from '../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileError } from '../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const FormData = getProfileForm(getState());

        const errors = validateProfile(FormData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.post<Profile>('/profile', FormData);

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
