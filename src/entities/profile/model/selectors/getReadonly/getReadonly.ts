import { StateSchema } from 'app/providers/store-provider';

export const getReadonly = (state: StateSchema) => state.profile?.readonly || false;
