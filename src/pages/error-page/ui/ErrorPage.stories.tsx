import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme-provider';
import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
    title: 'Pages/ErrorPage',
    component: ErrorPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const LightErrorPage: Story = {
    args: {},
};
export const DarkErrorPage: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
