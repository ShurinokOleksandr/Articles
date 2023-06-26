import axios from 'axios';
import { userActions } from 'entities/user';
import { TestAsyncThunk } from 'shared/lib/test/test-asynk-thunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mokedAxios = jest.mocked(axios, true);
describe('Login by username ', () => {
    test('Login ', async () => {
        const userValue = { username: 'admin', id: '1' };
        mokedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const resultThunk = await thunk.callThunk({ username: 'admin', password: '123' });
        expect(mokedAxios.post).toBeCalled();
        expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValue));
        expect(resultThunk.meta.requestStatus).toBe('fulfilled');
    });
    test('Error ', async () => {
        mokedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const resultThunk = await thunk.callThunk({ username: 'admin', password: '123' });
        expect(mokedAxios.post).toBeCalled();
        expect(resultThunk.meta.requestStatus).toBe('rejected');
    });
});
