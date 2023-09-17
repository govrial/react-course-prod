import { classNames } from './classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('class', { mod: true })).toBe('class mod');
    });
});
