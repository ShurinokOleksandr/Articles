import { StateSchema } from 'app/providers/store-provider';
import { Country, Currency } from 'shared/const/common';
import { getProfileData } from './getProfileData';

describe('Test getProfileData', () => {
    test('Get data ', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                data: {
                    first: 'Sasha',
                    lastname: 'shurinok',
                    age: 22,
                    currency: Currency.UAH,
                    country: Country.Ukraine,
                    username: 'ad',
                    avatar: 'ava',
                    city: 'xx',
                },
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(state.profile?.data);
    });
});
