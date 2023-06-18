import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from 'shared/ui/page-loader/PageLoader';
import { Theme } from 'app/providers/theme-provider';

const meta: Meta<typeof PageLoader> = {
    title: 'Shared/Loader',
    component: PageLoader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const LightLoader: Story = {
};
export const DarkLoader: Story = {
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
