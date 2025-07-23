import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import ScreenReaderText from './screen-reader-text';

const content = 'My content';

test('screen reader text renders correctly', () => {
    render(
        <ScreenReaderText>
            {content}
        </ScreenReaderText>
    );

    const srtext = document.querySelector('span');

    expect(srtext).toHaveClass('visually-hidden');
    expect(srtext?.textContent).toEqual(content)
});

test('passing additional props', () => {
    render(
        <ScreenReaderText
            data-test="foo"
        >
            {content}
        </ScreenReaderText>
    );

    const srtext = document.querySelector('span');
    expect(srtext?.dataset.test).toEqual('foo');
});
