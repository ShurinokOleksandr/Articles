import { StateSchema } from 'app/providers/store-provider';
import { getError } from './getError';

describe('Test error', () => {
    test('Get error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(getError(state as StateSchema)).toEqual('error');
    });
});
