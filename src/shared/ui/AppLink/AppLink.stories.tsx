import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme-provider';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'Shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const LightAppLink: Story = {
    args: {
        children: 'Test link',
    },
};
export const DarkAppLink: Story = {
    args: {
        children: 'Test link',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
