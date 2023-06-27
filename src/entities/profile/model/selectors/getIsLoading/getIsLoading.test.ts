import { StateSchema } from 'app/providers/store-provider';
import { getIsLoading } from './getIsLoading';

describe('Test isLoading', () => {
    test('Get isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getIsLoading(state as StateSchema)).toEqual(true);
    });
});
