import axios from 'axios';
import { userActions } from 'entities/user';
import { TestAsyncThunk } from 'shared/lib/test/test-asynk-thunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('Login by username ', () => {
    test('Login ', async () => {
        const userValue = { username: 'admin', id: '1' };
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const resultThunk = await thunk.callThunk({ username: 'admin', password: '123' });
        expect(thunk.api.post).toBeCalled();
        expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValue));
        expect(resultThunk.meta.requestStatus).toBe('fulfilled');
    });
    test('Error ', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const resultThunk = await thunk.callThunk({ username: 'admin', password: '123' });
        expect(thunk.api.post).toBeCalled();
        expect(resultThunk.meta.requestStatus).toBe('rejected');
    });
});
