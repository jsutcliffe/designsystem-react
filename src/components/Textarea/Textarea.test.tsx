import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Textarea from './Textarea';

const TEXTAREA_ID = 'textarea';
const LABEL_TEXT = 'Description';

test('text input renders correctly', () => {
    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
        />
    );

    const textarea = screen.getByRole('textbox');
    const label = screen.getByText(LABEL_TEXT);

    expect(textarea).toHaveClass('ds_input');
    expect(textarea).toHaveAttribute('id', TEXTAREA_ID);
    expect(textarea).toHaveAttribute('name', TEXTAREA_ID);
    expect(textarea).toHaveAttribute('rows', String(4));

    expect(label).toHaveClass('ds_label');
    expect(label).toHaveAttribute('for', TEXTAREA_ID);
    expect(label.tagName).toEqual('LABEL');
    expect(label.textContent).toEqual(LABEL_TEXT);

    expect(textarea.previousSibling).toEqual(label);
});

test('textarea with character count', () => {
    const MAX_LENGTH = 250;

    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
            maxlength={MAX_LENGTH}
        />
    );

    const textarea = screen.getByRole('textbox');
    const textareaWrapper = textarea.parentElement;

    expect(textareaWrapper).toHaveAttribute('data-maxlength', MAX_LENGTH.toString());
    expect(textareaWrapper).toHaveAttribute('data-module', 'ds-character-count');
});

test('text input with character count and threshold', () => {
    const MAX_LENGTH = 250;
    const COUNT_THRESHOLD = 80;

    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
            maxlength={MAX_LENGTH}
            countThreshold={COUNT_THRESHOLD}
        />
    );

    const textarea = screen.getByRole('textbox');
    const textareaWrapper = textarea.parentElement;

    expect(textareaWrapper).toHaveAttribute('data-threshold', COUNT_THRESHOLD.toString());
});

test('textarea with hint text', () => {
    const HINT_TEXT = 'hint text';

    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
            hintText={HINT_TEXT}
        />
    );

    const hintTextEl = screen.getByText(HINT_TEXT);
    const textarea = screen.getByRole('textbox');

    expect(hintTextEl).toBeInTheDocument();
    expect(textarea).toHaveAttribute('aria-describedby', hintTextEl.id);
});

test('textarea with custom name', () => {
    const TEXTAREA_NAME = 'foo';

    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
            name={TEXTAREA_NAME}
        />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('name', TEXTAREA_NAME);
});

test('textarea with blur function', () => {
    const ONBLUR_FUNCTION = vi.fn();

    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
            onBlur={ONBLUR_FUNCTION}
        />
    );

    const textarea = screen.getByRole('textbox');

    fireEvent.blur(textarea);

    expect(ONBLUR_FUNCTION).toHaveBeenCalled();
});

test('textarea with change function', () => {
    const ONCHANGE_FUNCTION = vi.fn();

    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
            onChange={ONCHANGE_FUNCTION}
        />
    );

    const textarea = screen.getByRole('textbox');

    fireEvent.change(textarea, {target: {value: 'foo'}});

    expect(ONCHANGE_FUNCTION).toHaveBeenCalled();
});

test('textarea with placeholder text', () => {
    const PLACEHOLDER_TEXT = 'foo';

    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
            placeholder={PLACEHOLDER_TEXT}
        />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('placeholder', PLACEHOLDER_TEXT);
});

test('textarea with custom rows', () => {
    const ROWS = 2;

    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
            rows={ROWS}
        />
    );

    const textarea = screen.getByRole('textbox');

    expect(textarea).toHaveAttribute('rows', String(ROWS));
});

test('textarea with initial value', () => {
    const TEXTAREA_CONTENT = 'Mygov.scot gives people and businesses information about and access to public services in Scotland. We work closely with public sector organisations to make public services easy to find and understand.';

    render(
        <Textarea
            defaultValue={TEXTAREA_CONTENT}
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
        />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea.textContent).toEqual(TEXTAREA_CONTENT);
});

test('textarea with error message', () => {
    const ERROR_MESSAGE_TEXT = 'This is a required field';

    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
            errorMessage={ERROR_MESSAGE_TEXT}
            hasError
        />
    );

    const textarea = screen.getByRole('textbox');
    const errorMessageElement = screen.getByText(ERROR_MESSAGE_TEXT);

    expect(textarea).toHaveClass('ds_input--error')
    expect(textarea).toHaveAttribute('aria-describedby', errorMessageElement.id);
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass('ds_question__error-message');
});

test('passing additional props', () => {
    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
            data-test="foo"
        />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Textarea
            id={TEXTAREA_ID}
            label={LABEL_TEXT}
            className="foo"
        />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('foo');
});
