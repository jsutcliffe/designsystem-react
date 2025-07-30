import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Textarea from './Textarea';

const id = 'textarea';
const labelText = 'Description';

test('text input renders correctly', () => {
    render(
        <Textarea
            id={id}
            label={labelText}
        />
    );

    const textarea = screen.getByRole('textbox');
    const label = screen.getByText(labelText);

    expect(textarea).toHaveClass('ds_input');
    expect(textarea).toHaveAttribute('id', id);
    expect(textarea).toHaveAttribute('name', id);
    expect(textarea).toHaveAttribute('rows', String(4));

    expect(label).toHaveClass('ds_label');
    expect(label).toHaveAttribute('for', id);
    expect(label.tagName).toEqual('LABEL');
    expect(label.textContent).toEqual(labelText);

    expect(textarea.previousSibling).toEqual(label);
});

test('textarea with character count', () => {
    const maxLength = 250;

    render(
        <Textarea
            id={id}
            label={labelText}
            maxlength={maxLength}
        />
    );

    const textarea = screen.getByRole('textbox');
    const textareaWrapper = textarea.parentElement;

    expect(textareaWrapper).toHaveAttribute('data-maxlength', maxLength.toString());
    expect(textareaWrapper).toHaveAttribute('data-module', 'ds-character-count');
});

test('text input with character count and threshold', () => {
    const maxLength = 250;
    const countThreshold = 80;

    render(
        <Textarea
            id={id}
            label={labelText}
            maxlength={maxLength}
            countThreshold={countThreshold}
        />
    );

    const textarea = screen.getByRole('textbox');
    const textareaWrapper = textarea.parentElement;

    expect(textareaWrapper).toHaveAttribute('data-threshold', countThreshold.toString());
});

test('textarea with hint text', () => {
    const hintText = 'hint text';
    render(
        <Textarea
            id={id}
            label={labelText}
            hintText={hintText}
        />
    );

    const hintTextEl = screen.getByText(hintText);
    const textarea = screen.getByRole('textbox');

    expect(hintTextEl).toBeInTheDocument();
    expect(textarea).toHaveAttribute('aria-describedby', hintTextEl.id);
});

test('textarea with custom name', () => {
    const name = 'foo';

    render(
        <Textarea
            id={id}
            label={labelText}
            name={name}
        />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('name', name);
});

test('textarea with blur function', () => {
    const onBlurFn = vi.fn();
    render(
        <Textarea
            id={id}
            label={labelText}
            onBlur={onBlurFn}
        />
    );

    const textarea = screen.getByRole('textbox');

    fireEvent.blur(textarea);

    expect(onBlurFn).toHaveBeenCalled();
});

test('textarea with change function', () => {
    const onChangeFn = vi.fn();
    render(
        <Textarea
            id={id}
            label={labelText}
            onChange={onChangeFn}
        />
    );

    const textarea = screen.getByRole('textbox');

    fireEvent.change(textarea, {target: {value: 'foo'}});

    expect(onChangeFn).toHaveBeenCalled();
});

test('textarea with placeholder text', () => {
    const placeholder = 'foo';

    render(
        <Textarea
            id={id}
            label={labelText}
            placeholder={placeholder}
        />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('placeholder', placeholder);
});

test('textarea with custom rows', () => {
    const rows = 2;

    render(
        <Textarea
            id={id}
            label={labelText}
            rows={rows}
        />
    );

    const textarea = screen.getByRole('textbox');

    expect(textarea).toHaveAttribute('rows', String(rows));
});

test('textarea with initial value', () => {
    const content = 'Mygov.scot gives people and businesses information about and access to public services in Scotland. We work closely with public sector organisations to make public services easy to find and understand.';

    render(
        <Textarea
            defaultValue={content}
            id={id}
            label={labelText}
        />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea.textContent).toEqual(content);
});

test('textarea with error message', () => {
    const errorMessage = 'This is a required field';
    render(
        <Textarea
            id={id}
            label={labelText}
            error
            errorMessage={errorMessage}
        />
    );

    const textarea = screen.getByRole('textbox');
    const errorMessageElement = screen.getByText(errorMessage);

    expect(textarea).toHaveClass('ds_input--error')
    expect(textarea).toHaveAttribute('aria-describedby', errorMessageElement.id);
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass('ds_question__error-message');
});

test('passing additional props', () => {
    render(
        <Textarea
            id={id}
            label={labelText}
            data-test="foo"
        />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Textarea
            id={id}
            label={labelText}
            className="foo"
        />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('foo');
});
