import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/store-provider/config/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}
export const StoreProvider = ({ children, initialState }:StoreProviderProps) => {
    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        navigate,
    );
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
