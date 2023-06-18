import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme-provider';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'Shared/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const LightThemeSwitcher: Story = {
    args: {},
};
export const DarkThemeSwitcher: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
