import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme-provider';
import { NotFoundPage } from 'pages/not-found-page';

const meta: Meta<typeof NotFoundPage> = {
    title: 'Pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const LightNotFoundPage: Story = {
    args: {},
};
export const DarkNotFoundPage: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
