import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme-provider';
import { Navbar } from 'widgets/navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const LightNavbar: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};
export const DarkNavbar: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
