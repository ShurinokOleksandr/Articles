import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/theme-provider';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'Features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LightThemeLoginForm: Story = {
    args: {
    },
};
export const DarkThemeLoginForm: Story = {
    args: {
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                {Story()}
            </div>
        )],
};
