import { StateSchema } from 'app/providers/store-provider';

describe('Test selectors', () => {
    test('Get isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { isLoading: true },
        };
        expect(state.articleDetails?.isLoading).toBe(true);
    });
    test('Get isError', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { error: 'error' },
        };
        expect(state.articleDetails?.error).toEqual('error');
    });
    test('Get data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { data: undefined },
        };
        expect(state.articleDetails?.data).toBe(undefined);
    });
});
