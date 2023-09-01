import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/theme-provider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'Entities/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const LightThemeCommentCard: Story = {
    args: {},
};
export const DarkThemeCommentCard: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                {Story()}
            </div>
        ),
    ],
};
