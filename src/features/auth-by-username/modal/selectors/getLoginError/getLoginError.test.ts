import { StateSchema } from 'app/providers/store-provider';
import { getLoginError } from './getLoginError';

describe('Selector error', () => {
    test('Get Error ', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                error: 'Error',
            },
        };
        expect(getLoginError(state as StateSchema)).toBe('Error');
    });
    test('Get undefined', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});
