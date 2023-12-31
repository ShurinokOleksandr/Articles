import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme-provider';
import { StoreProvider } from 'app/providers/store-provider';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
};
const profileData = {
    first: 'Саша',
    lastname: 'Шуринок1',
    age: 23,
    currency: Currency.UAH,
    country: Country.Ukraine,
    city: 'Kiev2',
    username: 'admin',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};
export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const LightProfilePage: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            <StoreProvider initialState={{ profile: { form: profileData } }}>
                <Story />
            </StoreProvider>
        ),
    ],
};
export const DarkProfilePage: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <StoreProvider initialState={{ profile: { form: profileData } }}>
                    <Story />
                </StoreProvider>
            </div>
        ),
    ],
};
