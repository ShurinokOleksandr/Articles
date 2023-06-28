import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { fetchProfileData } from '../service/fetch-profile-data/fetchProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};
const error = 'error';
describe('Profile slice ', () => {
    test('Set readOnly', () => {
        const state:DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });
    test('Set cancelEdit', () => {
        const state:DeepPartial<ProfileSchema> = {
            form: {
                username: '',
            },
            data,
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
    test('Set updateProfile', () => {
        const state:DeepPartial<ProfileSchema> = { form: { username: '123' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '1',
            }),
        )).toEqual({
            form: {
                username: '1',
            },
        });
    });
    test('Set fetchProfileData.pending', () => {
        const state:DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: 'error',
        };

        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });
    test('Set fetchProfileData.pending', () => {
        const state:DeepPartial<ProfileSchema> = {
            isLoading: true,
            data: {},
            form: {},
        };

        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            data,
            form: data,
        });
    });
});
