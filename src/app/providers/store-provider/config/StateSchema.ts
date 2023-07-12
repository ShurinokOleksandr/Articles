import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/auth-by-username';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { ProfileSchema } from 'entities/profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router';
import { To } from 'history';
import { ArticleDetailsSchema } from 'entities/article';
import { ArticleDetailsCommentsSchema } from 'pages/article-details-page';

export interface StateSchema {
    user:UserSchema,
    loginForm?:LoginSchema,
    profile?:ProfileSchema,
    articleDetails?:ArticleDetailsSchema,
    articleDetailsComments?:ArticleDetailsCommentsSchema,
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

export interface ThunkExtraArg {
    api:AxiosInstance;
    navigate?:(to: To, options?: NavigateOptions) => void;
}
export interface ThunkConfig<T> {
    rejectValue: T,
    extra:ThunkExtraArg,
    state: StateSchema,
}
