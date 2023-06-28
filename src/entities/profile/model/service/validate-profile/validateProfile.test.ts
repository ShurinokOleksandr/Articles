import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { validateProfile, ValidateProfileError } from 'entities/profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};
describe('Test ValidateProfile ', () => {
    test('Test success ', async () => {
        const validate = validateProfile(data);

        expect(validate).toEqual([]);
    });
    test('incorrect first ', async () => {
        const validate = validateProfile({ ...data, first: '' });

        expect(validate).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
