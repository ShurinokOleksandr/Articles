import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { getError } from './getError';

describe('Get first name', () => {
    test('Get name', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    first: 'sasa',
                },
            },
        };
        expect(getError(state as StateSchema)).toEqual('sasa');
    });
});
