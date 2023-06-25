import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { createReducerManager } from 'app/providers/store-provider/config/reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?:StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
