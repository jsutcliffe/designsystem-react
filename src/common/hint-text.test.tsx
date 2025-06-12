import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HintText from './hint-text';

const id = 'hint-text';
const content = 'Hint text';

test('hint test renders correctly', () => {
    render(
        <HintText data-testid="hint-text"
            id={id}
            text={content}
        />
    );

    const hintText = screen.getByTestId('hint-text');
    expect(hintText).toHaveClass('ds_hint-text');
    expect(hintText).toHaveAttribute('id', id);
    expect(hintText.tagName).toEqual('P');
    expect(hintText.textContent).toEqual(content);
});

test('hint test with children instead of text', () => {
    render(
        <HintText data-testid="hint-text"
            id={id}
        >
            <span>{content}</span>
        </HintText>
    );

    const hintText = screen.getByTestId('hint-text');
    expect(hintText.innerHTML).toEqual(`<span>${content}</span>`);
});

test('passing additional props', () => {
    render(
        <HintText data-testid="hint-text"
            id={id}
            text={content}
            data-test="foo"
        />
    );

    const hintText = screen.getByTestId('hint-text');
    expect(hintText?.dataset.test).toEqual('foo');
});
