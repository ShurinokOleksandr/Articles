import { StateSchema } from 'app/providers/store-provider';

export const getInited = (state: StateSchema) => state.user._inited;
