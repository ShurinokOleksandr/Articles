import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme-provider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'Pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const LightAboutPage: Story = {
    args: {},
};
export const DarkAboutPage: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
