import { StateSchema } from 'app/providers/store-provider';

import { getProfileValidateError, ValidateProfileError } from 'entities/profile';

describe('Test getProfileData', () => {
    test('Get data ', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
});
