import { test, expect, vi } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import TextInput from './text-input';

const id = 'text-input';
const labelText = 'First name';

test('text input renders correctly', () => {
    render(
        <TextInput
            id={id}
            label={labelText}
        />
    );

    const textInput = screen.getByRole('textbox');
    const label = screen.getByText(labelText);

    expect(textInput).toHaveClass('ds_input');
    expect(textInput).toHaveAttribute('id', id);
    expect(textInput).toHaveAttribute('name', id);
    expect(textInput).toHaveAttribute('type', 'text');
    expect(textInput.tagName).toEqual('INPUT');

    expect(label).toHaveClass('ds_label');
    expect(label).toHaveAttribute('for', id);
    expect(label.tagName).toEqual('LABEL');
    expect(label.textContent).toEqual(labelText);

    expect(textInput.previousSibling).toEqual(label);
});

test('text input with custom class(es)', () => {
    render(
        <TextInput
            id={id}
            label={labelText}
            className="foo bar"
        />
    );

    const textInput = screen.getByRole('textbox');

    expect(textInput).toHaveClass('ds_input', 'foo', 'bar');
});

test('text input with character count', () => {
    const maxLength = 100;

    render(
        <TextInput
            id={id}
            label={labelText}
            maxlength={maxLength}
        />
    );

    const textInput = screen.getByRole('textbox');
    const textInputWrapper = textInput.parentNode;

    expect(textInputWrapper).toHaveAttribute('data-maxlength', maxLength.toString());
    expect(textInputWrapper).toHaveAttribute('data-module', 'ds-character-count');
});

test('text input with character count and threshold', () => {
    const maxLength = 100;
    const countThreshold = 80;

    render(
        <TextInput
            id={id}
            label={labelText}
            maxlength={maxLength}
            countThreshold={countThreshold}
        />
    );

    const textInput = screen.getByRole('textbox');
    const textInputWrapper = textInput.parentNode;

    expect(textInputWrapper).toHaveAttribute('data-threshold', countThreshold.toString());
});

test('text input with width', () => {
    const width = 'fixed-10';

    render(
        <TextInput
            id={id}
            label={labelText}
            width={width}
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveClass(`ds_input--${width}`);
});

test('text input with currency', () => {
    render(
        <TextInput
            id={id}
            label={labelText}
            currency
        />
    );

    const textInput = screen.getByRole('textbox');
    const textInputWrapper = textInput.parentNode;

    expect(textInputWrapper.tagName).toEqual('DIV')
    expect(textInputWrapper).toHaveClass('ds_currency-wrapper');
    expect(textInputWrapper).not.toHaveAttribute('data-symbol');
});

test('text input with custom currency symbol', () => {
    const symbol = '@';

    render(
        <TextInput
            id={id}
            label={labelText}
            currency
            currencySymbol={symbol}
        />
    );

    const textInput = screen.getByRole('textbox');
    const textInputWrapper = textInput.parentNode;

    expect(textInputWrapper).toHaveAttribute('data-symbol', symbol);
});

test('text input with button', () => {
    const buttonText = 'Search';
    const buttonIcon = 'search';
    render(
        <TextInput
            id={id}
            label={labelText}
            buttonIcon="search"
            buttonText="Search"
            hasButton
        />
    );

    const textInput = screen.getByRole('textbox');
    const textInputWrapper = textInput.parentNode;
    const button = screen.getByRole('button');
    const buttonTextElement = within(button).getByText(buttonText);
    const buttonIconElement = within(button).getByRole('img', { hidden: true });

    expect(textInputWrapper).toHaveClass('ds_input__wrapper', 'ds_input__wrapper--has-icon ');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('ds_button');
    expect(button).toHaveAttribute('type', 'button');
    expect(button.tagName).toEqual('BUTTON');
    expect(buttonTextElement).toHaveClass('visually-hidden');
    expect(buttonTextElement.tagName).toEqual('SPAN');

    // todo: check for correct icon
});

test('text input with hint text', () => {
    const hintText = 'hint text';
    render(
        <TextInput
            id={id}
            label={labelText}
            hintText={hintText}
        />
    );

    const hintTextEl = screen.getByText(hintText);
    const textInput = screen.getByRole('textbox');

    expect(hintTextEl).toBeInTheDocument();
    expect(textInput).toHaveAttribute('aria-describedby', hintTextEl.id);
});

test('text input with custom name', () => {
    const name = 'foo';

    render(
        <TextInput
            id={id}
            label={labelText}
            name={name}
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveAttribute('name', name);
});

test('text input with blur function', () => {
    const onBlurFn = vi.fn();
    render(
        <TextInput
            id={id}
            label={labelText}
            onBlur={onBlurFn}
        />
    );

    const textInput = screen.getByRole('textbox');

    fireEvent.blur(textInput);

    expect(onBlurFn).toHaveBeenCalled();
});

test('text input with change function', () => {
    const onChangeFn = vi.fn();
    render(
        <TextInput
            id={id}
            label={labelText}
            onChange={onChangeFn}
        />
    );

    const textInput = screen.getByRole('textbox');

    fireEvent.change(textInput, {target: {value: 'foo'}});

    expect(onChangeFn).toHaveBeenCalled();
});

test('text input with placeholder text', () => {
    const placeholder = 'foo';

    render(
        <TextInput
            id={id}
            label={labelText}
            placeholder={placeholder}
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveAttribute('placeholder', placeholder);
});

test('text input with different type', () => {
    const type = 'foo';

    render(
        <TextInput
            id={id}
            label={labelText}
            type={type}
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveAttribute('type', type);
});

test('text input with initial value', () => {
    const initialValue = 'initial value';

    render(
        <TextInput
            id={id}
            label={labelText}
            value={initialValue}
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveAttribute('value', initialValue);
});

test('text input with error message', () => {
    const errorMessage = 'This is a required field';
    render(
        <TextInput
            id={id}
            label={labelText}
            error
            errorMessage={errorMessage}
        />
    );

    const textInput = screen.getByRole('textbox');
    const errorMessageElement = screen.getByText(errorMessage);

    expect(textInput).toHaveClass('ds_input--error')
    expect(textInput).toHaveAttribute('aria-describedby', errorMessageElement.id);
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass('ds_question__error-message');
});

test('passing additional props', () => {
    render(
        <TextInput
            id={id}
            label={labelText}
            data-test="foo"
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <TextInput
            id={id}
            label={labelText}
            className="foo"
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveClass('foo', 'ds_input');
});
