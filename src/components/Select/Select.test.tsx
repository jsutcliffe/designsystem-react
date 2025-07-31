import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';

const SELECT_ID = 'select-component';
const LABEL_TEXT = 'choose a component';
const OPTIONS = [
    {
        text: 'Accordion',
        value: 'accordion'
    },
    {
        text: 'Breadcrumbs',
        value: 'breadcrumbs'
    },
    {
        text: 'Button',
        value: 'button'
    }
];

test('select renders correctly', () => {
    render(
        <Select
            id={SELECT_ID}
            label={LABEL_TEXT}
            options={OPTIONS}
        />
    );

    const select = screen.getByRole('combobox');
    const selectWrapper = select.parentElement;
    const label = selectWrapper?.previousElementSibling;
    const selectArrow = select.nextElementSibling;

    expect(select).toHaveClass('ds_select');
    expect(select.id).toEqual(SELECT_ID);
    expect(select).toHaveAttribute('name', SELECT_ID);

    expect(selectWrapper).toHaveClass('ds_select-wrapper');
    expect(selectWrapper?.tagName).toEqual('DIV');

    expect(label).toHaveClass('ds_label');
    expect(label).toHaveAttribute('for', SELECT_ID);

    expect(selectArrow).toHaveClass('ds_select-arrow');
    expect(selectArrow).toHaveAttribute('aria-hidden');
    expect(selectArrow?.textContent).toEqual('');
});

test('select with width', () => {
    const SELECTWIDTH = 'fixed-10';

    render(
        <Select
            id={SELECT_ID}
            label={LABEL_TEXT}
            options={OPTIONS}
            width={SELECTWIDTH}
        />
    );

    const selectWrapper = screen.getByRole('combobox').parentElement;
    expect(selectWrapper).toHaveClass(`ds_input--${SELECTWIDTH}`);
});

test('select with hint text', () => {
    const HINT_TEXT = 'hint text';

    render(
        <Select
            id={SELECT_ID}
            label={LABEL_TEXT}
            options={OPTIONS}
            hintText={HINT_TEXT}
        />
    );

    const hintTextEl = screen.getByText(HINT_TEXT);
    const select = screen.getByRole('combobox');

    expect(hintTextEl).toBeInTheDocument();
    expect(select).toHaveAttribute('aria-describedby', hintTextEl.id);
});

test('select with custom name', () => {
    const SELECT_NAME = 'foo';

    render(
        <Select
            id={SELECT_ID}
            label={LABEL_TEXT}
            options={OPTIONS}
            name={SELECT_NAME}
        />
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('name', SELECT_NAME);
});

test('select with blur function', () => {
    const ONBLUR_FUNCTION = vi.fn();

    render(
        <Select
            id={SELECT_ID}
            label={LABEL_TEXT}
            options={OPTIONS}
            onBlur={ONBLUR_FUNCTION}
        />
    );

    const select = screen.getByRole('combobox');

    fireEvent.blur(select);

    expect(ONBLUR_FUNCTION).toHaveBeenCalled();
});

test('select with change function', () => {
    const ONCHANGE_FUNCTION = vi.fn();

    render(
        <Select
            id={SELECT_ID}
            label={LABEL_TEXT}
            options={OPTIONS}
            onChange={ONCHANGE_FUNCTION}
        />
    );

    const select = screen.getByRole('combobox');

    fireEvent.change(select, {target: {value: 'button'}});

    expect(ONCHANGE_FUNCTION).toHaveBeenCalled();
});

test('select with placeholder option', () => {
    const PLACEHOLDER_TEXT = 'foo';

    render(
        <Select
            id={SELECT_ID}
            label={LABEL_TEXT}
            options={OPTIONS}
            placeholder={PLACEHOLDER_TEXT}
        />
    );

    const select = screen.getByRole('combobox');
    const firstOption = select.childNodes[0];
    expect(firstOption.textContent).toEqual(PLACEHOLDER_TEXT);
    expect(firstOption).toHaveAttribute('value', '');
});

test('select with initial value', () => {
    const INITIAL_VALUE = 'button';

    render(
        <Select
            id={SELECT_ID}
            label={LABEL_TEXT}
            options={OPTIONS}
            defaultValue={INITIAL_VALUE}
        />
    );

    const select = screen.getByRole('combobox');
    const selectedOption = [].slice.call(select.childNodes).filter(childNode => childNode.selected)[0];
    expect(selectedOption).toHaveAttribute('value', INITIAL_VALUE);
});

test('select with error message', () => {
    const ERROR_MESSAGE_TEXT = 'This is a required field';

    render(
        <Select
            id={SELECT_ID}
            label={LABEL_TEXT}
            options={OPTIONS}
            error
            errorMessage={ERROR_MESSAGE_TEXT}
        />
    );

    const select = screen.getByRole('combobox');
    const selectWrapper = select.parentElement;
    const errorMessageElement = screen.getByText(ERROR_MESSAGE_TEXT);

    expect(selectWrapper).toHaveClass('ds_input--error')
    expect(select).toHaveAttribute('aria-describedby', errorMessageElement.id);
    expect(select).toHaveAttribute('aria-invalid', 'true');
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass('ds_question__error-message');
});

test('passing additional props', () => {
    render(
        <Select
            id={SELECT_ID}
            label={LABEL_TEXT}
            options={OPTIONS}
            data-test="foo"
        />
    );

    const select = screen.getByRole('combobox');
    const selectWrapper = select.parentElement;
    expect(selectWrapper?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Select
            id={SELECT_ID}
            label={LABEL_TEXT}
            options={OPTIONS}
            className="foo"
        />
    );

    const select = screen.getByRole('combobox');
    const selectWrapper = select.parentElement;
    expect(selectWrapper).toHaveClass('foo', 'ds_select-wrapper');
});
