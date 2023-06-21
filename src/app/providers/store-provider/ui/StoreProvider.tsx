import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/store-provider/config/store';
import { StoreType } from 'app/providers/store-provider/config/StoreType';

interface StoreProviderProps {
    children:React.ReactNode;
    initialState?: StoreType;
}
export const StoreProvider = ({ children, initialState }:StoreProviderProps) => {
    const store = createReduxStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
