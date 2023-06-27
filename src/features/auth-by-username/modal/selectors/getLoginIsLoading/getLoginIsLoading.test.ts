import { StateSchema } from 'app/providers/store-provider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('Selector loading', () => {
    test('Get true ', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });
    test('Get false ', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
