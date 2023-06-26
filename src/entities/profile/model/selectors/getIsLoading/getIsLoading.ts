import { StateSchema } from 'app/providers/store-provider';

export const getIsLoading = (state:StateSchema) => state?.profile?.isLoading || false;
