import { StateSchema } from 'app/providers/store-provider';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { getProfileForm } from './getProfileForm';

describe('Test getProfileForm', () => {
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
        expect(getProfileForm(state as StateSchema)).toEqual(state.profile?.form);
    });
});
