import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { createReducerManager } from 'app/providers/store-provider/config/reducerManager';
import { $api } from 'shared/api/api';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { CombinedState, Reducer } from 'redux';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState?:StateSchema,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    // @ts-ignore
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
