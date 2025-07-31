import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HintText from './HintText';

const HINT_TEXT_ID = 'hint-text';
const HINT_TEXT_CONTENT = 'Hint text';

test('hint test renders correctly', () => {
    render(
        <HintText data-testid="hint-text"
            id={HINT_TEXT_ID}
            text={HINT_TEXT_CONTENT}
        />
    );

    const hintText = screen.getByTestId('hint-text');
    expect(hintText).toHaveClass('ds_hint-text');
    expect(hintText).toHaveAttribute('id', HINT_TEXT_ID);
    expect(hintText.tagName).toEqual('P');
    expect(hintText.textContent).toEqual(HINT_TEXT_CONTENT);
});

test('hint test with children instead of text', () => {
    render(
        <HintText data-testid="hint-text"
            id={HINT_TEXT_ID}
        >
            <span>{HINT_TEXT_CONTENT}</span>
        </HintText>
    );

    const hintText = screen.getByTestId('hint-text');
    expect(hintText.innerHTML).toEqual(`<span>${HINT_TEXT_CONTENT}</span>`);
});

test('passing additional props', () => {
    render(
        <HintText data-testid="hint-text"
            id={HINT_TEXT_ID}
            text={HINT_TEXT_CONTENT}
            data-test="foo"
        />
    );

    const hintText = screen.getByTestId('hint-text');
    expect(hintText?.dataset.test).toEqual('foo');
});
