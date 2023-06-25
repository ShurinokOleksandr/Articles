import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/auth-by-username';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';

export interface StateSchema {
    user:UserSchema,
    loginForm?:LoginSchema,
}
export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap:() => ReducersMapObject<StateSchema>;
    reduce:(state:StateSchema, action:AnyAction) => CombinedState<StateSchema>;
    add:(key:StateSchemaKey, reducer:Reducer) => void;
    remove:(key:StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager:ReducerManager;
}
