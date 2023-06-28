import type { Meta, StoryObj } from '@storybook/react';

import { Select } from 'shared/ui/select/Select';
import { Currency } from 'entities/currency';

const meta: Meta<typeof Select> = {
    title: 'Shared/Select',
    component: Select,
    tags: ['autodocs'],
};
const options = [
    { value: Currency.UAH, content: Currency.UAH },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];
export default meta;
type Story = StoryObj<typeof Select>;

export const LightSelect: Story = {
    args: {
        options,
    },
};
