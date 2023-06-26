import { StateSchema } from 'app/providers/store-provider';

export const getError = (state:StateSchema) => state?.profile?.error || '';
