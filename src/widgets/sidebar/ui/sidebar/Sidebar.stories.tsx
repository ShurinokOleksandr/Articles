import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from 'widgets/sidebar';
import { Theme } from 'app/providers/theme-provider';

const meta: Meta<typeof Sidebar> = {
    title: 'Widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const LightSidebar: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};
export const DarkSidebar: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
