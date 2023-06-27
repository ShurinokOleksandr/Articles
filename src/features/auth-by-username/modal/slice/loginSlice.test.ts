import { LoginSchema } from 'features/auth-by-username';
import { loginActions, loginReducer } from './loginSlice';

describe('Login slice ', () => {
    test('Test setUsername ', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123'))).toEqual({ username: '123' });
    });
    test('Test setPassword ', () => {
        const state: DeepPartial<LoginSchema> = { password: 'user' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' });
    });
});
