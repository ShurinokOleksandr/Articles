import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '../../src/app/providers/theme-provider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </div>
        ),
    ],
};

export default preview;
