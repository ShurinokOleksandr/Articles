import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/theme-provider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'Shared/CommentList',
    component: CommentList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const LightThemeCommentList: Story = {
    args: {},
};
export const DarkThemeCommentList: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                {Story()}
            </div>
        ),
    ],
};
