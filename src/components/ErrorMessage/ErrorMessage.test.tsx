import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

const ERROR_TEXT = 'Error message';
const ERROR_ID = 'errormessage';

test('error message renders correctly', () => {

    render(
        <ErrorMessage text={ERROR_TEXT} id={ERROR_ID}/>
    );

    const errorMessageElement = screen.getByRole('paragraph');

    expect(errorMessageElement).toHaveAttribute('id', ERROR_ID);
    expect(errorMessageElement).toHaveClass('ds_question__error-message');
    expect(errorMessageElement.textContent).toEqual(ERROR_TEXT);
});

test('error message with HTML content', () => {
    const ERROR_ID = 'errormessage';

    render(
        <ErrorMessage id={ERROR_ID}>hello <a href="#foo">world</a></ErrorMessage>
    );

    const errorMessageElement = screen.getByRole('paragraph');

    expect(errorMessageElement.innerHTML).toEqual('hello <a href="#foo">world</a>');
});

test('passing additional props', () => {
    render(
        <ErrorMessage data-test="foo" text={ERROR_TEXT} id={ERROR_ID}/>
    )

    const errorMessageElement = screen.getByRole('paragraph');
    expect(errorMessageElement?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <ErrorMessage className="foo" text={ERROR_TEXT} id={ERROR_ID}/>
    )

    const errorMessageElement = screen.getByRole('paragraph');
    expect(errorMessageElement).toHaveClass('foo', 'ds_question__error-message');
});
