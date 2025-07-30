import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

const errorText = 'Error message';
const errorId = 'errormessage';

test('error message renders correctly', () => {

    render(
        <ErrorMessage text={errorText} id={errorId}/>
    );

    const errorMessageElement = screen.getByRole('paragraph');

    expect(errorMessageElement).toHaveAttribute('id', errorId);
    expect(errorMessageElement).toHaveClass('ds_question__error-message');
    expect(errorMessageElement.textContent).toEqual(errorText);
});

test('error message with HTML content', () => {
    const errorId = 'errormessage';

    render(
        <ErrorMessage id={errorId}>hello <a href="#foo">world</a></ErrorMessage>
    );

    const errorMessageElement = screen.getByRole('paragraph');

    expect(errorMessageElement.innerHTML).toEqual('hello <a href="#foo">world</a>');
});

test('passing additional props', () => {
    render(
        <ErrorMessage data-test="foo" text={errorText} id={errorId}/>
    )

    const errorMessageElement = screen.getByRole('paragraph');
    expect(errorMessageElement?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <ErrorMessage className="foo" text={errorText} id={errorId}/>
    )

    const errorMessageElement = screen.getByRole('paragraph');
    expect(errorMessageElement).toHaveClass('foo', 'ds_question__error-message');
});
