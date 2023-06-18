import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme-provider';
import MainPage from 'pages/main-page/ui/MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'Pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const LightMainPage: Story = {
    args: {},
};
export const DarkMainPage: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
