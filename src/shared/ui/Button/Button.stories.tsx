import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme-provider';
import { Button, ButtonSize, ThemeButton } from './Button';
import Sun from '../../assets/icons/sun.svg';
import Moon from '../../assets/icons/cloud_moon.svg';

const meta: Meta<typeof Button> = {
    title: 'Shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LightThemeButton: Story = {
    args: {
        children: <Sun />,
        theme: ThemeButton.CLEAR,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                {Story()}
            </div>
        ),
    ],
};
export const DarkThemeButton: Story = {
    args: {
        children: <Moon />,
        theme: ThemeButton.CLEAR,
    },
};
export const OutlineButton: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.OUTLINE,
    },
};
export const MCollapseButton: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};
export const LCollapseButton: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export const XLCollapseButton: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
