import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from 'shared/ui/avatar/Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarComp: Story = {
    args: {
        src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
};
