import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { createReduxStore, StoreProvider } from 'app/providers/store-provider';
import { DeepPartial } from '@reduxjs/toolkit';
import i18nForTest from '../../../config/i18n/i18nForTest';
import { StoreType } from '../../../../app/providers/store-provider/config/StoreType';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StoreType>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;
    const store = createReduxStore(initialState);
    return render(
        <StoreProvider>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
