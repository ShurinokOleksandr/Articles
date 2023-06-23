import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/theme-provider';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Shared/Text',
    component: Text,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const DefaultText: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};
export const DarkThemeText: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                {Story()}
            </div>
        ),
    ],
};
