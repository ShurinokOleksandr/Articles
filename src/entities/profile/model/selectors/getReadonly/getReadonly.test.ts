import { StateSchema } from 'app/providers/store-provider';
import { getReadonly, ValidateProfileError } from 'entities/profile';

describe('Test getReadonly', () => {
    test('Get readonly', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getReadonly(state as StateSchema)).toBe(true);
    });
});
