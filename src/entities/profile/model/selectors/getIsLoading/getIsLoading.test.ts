import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { getIsLoading } from './getIsLoading';

describe('Get first name', () => {
    test('Get name', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    first: 'sasa',
                },
            },
        };
        expect(getIsLoading(state as StateSchema)).toEqual('sasa');
    });
});
