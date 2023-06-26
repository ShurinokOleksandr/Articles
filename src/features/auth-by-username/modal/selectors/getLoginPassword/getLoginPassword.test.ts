import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { getLoginPassword } from './getLoginPassword';

describe('Selector password', () => {
    test('Get password ', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toBe('123');
    });
    test('Get undefined', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe(undefined);
    });
});
