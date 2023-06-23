import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '../../src/app/providers/theme-provider';
import { StoreProvider } from '../../src/app/providers/store-provider';

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
                    <StoreProvider>
                        <Story />
                    </StoreProvider>
                </BrowserRouter>
            </div>
        ),
    ],
};

export default preview;
