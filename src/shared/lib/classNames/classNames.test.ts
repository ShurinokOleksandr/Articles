import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('class')).toBe('class');
    });
    test('with addition class', () => {
        expect(classNames('class', {}, ['class'])).toBe('class class');
    });
    test('with all arg', () => {
        expect(classNames('class', { req: true, ret: false }, ['class'])).toBe('class class req');
    });
});
