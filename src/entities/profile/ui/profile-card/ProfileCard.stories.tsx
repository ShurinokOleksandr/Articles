import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme-provider';
import { ProfileCard } from 'entities/profile';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';

const meta: Meta<typeof ProfileCard> = {
    title: 'Entities/ProfileCard',
    component: ProfileCard,
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
type Story = StoryObj<typeof ProfileCard>;

export const LightProfileCard: Story = {
    args: {
        data: profileData,
    },
};
export const DarkProfileCard: Story = {
    args: {
        data: profileData,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
export const WithErrorDark: Story = {
    args: {
        error: 'Error',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
export const WithErrorLight: Story = {
    args: {
        error: 'Error',
    },
};
