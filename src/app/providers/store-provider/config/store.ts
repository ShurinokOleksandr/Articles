import { configureStore } from '@reduxjs/toolkit';
import { StoreType } from './StoreType';

export function createReduxStore(initialState:StoreType) {
    return configureStore<StoreType>({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
