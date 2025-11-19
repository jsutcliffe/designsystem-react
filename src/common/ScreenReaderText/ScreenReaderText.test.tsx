import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import ScreenReaderText from './ScreenReaderText';

const CONTENT = 'My content';

test('screen reader text renders correctly', () => {
    render(
        <ScreenReaderText>
            {CONTENT}
        </ScreenReaderText>
    );

    const srtext = document.querySelector('span');

    expect(srtext).toHaveClass('visually-hidden');
    expect(srtext?.textContent).toEqual(CONTENT)
});

test('passing additional props', () => {
    render(
        <ScreenReaderText
            data-test="foo"
        >
            {CONTENT}
        </ScreenReaderText>
    );

    const srtext = document.querySelector('span');
    expect(srtext?.dataset.test).toEqual('foo');
});
