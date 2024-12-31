import {classNames} from "./classNames";

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('someClass', )).toBe('someClass');
    })

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    })
    test('with additional class', () => {
        const expected = 'someClass class1 class2 hovered scrollbars';
        expect(classNames('someClass', {hovered: true, scrollbars: true}, ['class1', 'class2'])).toBe(expected);
    })
    test('with additional class', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', {hovered: true, scrollbars: false}, ['class1', 'class2'])).toBe(expected);
    })

    test('with additional class', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', {hovered: true, scrollbars: false}, ['class1', 'class2'])).toBe(expected);
    })
})


test('test', () => {
    expect(true).toBe(true);
})