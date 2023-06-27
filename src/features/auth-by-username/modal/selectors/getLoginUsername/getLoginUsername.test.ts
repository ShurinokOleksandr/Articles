import { StateSchema } from 'app/providers/store-provider';
import { getLoginUsername } from './getLoginUsername';

describe('Selector username', () => {
    test('Get password ', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('username');
    });
    test('Get "" ', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
