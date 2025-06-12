import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './select';

const id = 'select-component';
const labelText = 'choose a component';
const options = [
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
            id={id}
            label={labelText}
            options={options}
        />
    );

    const select = screen.getByRole('combobox');
    const selectWrapper = select.parentNode;
    const label = selectWrapper?.previousSibling;
    const selectArrow = select.nextSibling;

    expect(select).toHaveClass('ds_select');
    expect(select.id).toEqual(id);
    expect(select).toHaveAttribute('name', id);

    expect(selectWrapper).toHaveClass('ds_select-wrapper');
    expect(selectWrapper.tagName).toEqual('DIV');

    expect(label).toHaveClass('ds_label');
    expect(label).toHaveAttribute('for', id);

    expect(selectArrow).toHaveClass('ds_select-arrow');
    expect(selectArrow).toHaveAttribute('aria-hidden');
    expect(selectArrow.textContent).toEqual('');
});

test('select with width', () => {
    const width = 'fixed-10';

    render(
        <Select
            id={id}
            label={labelText}
            options={options}
            width={width}
        />
    );

    const selectWrapper = screen.getByRole('combobox').parentNode;
    expect(selectWrapper).toHaveClass(`ds_input--${width}`);
});

test('select with hint text', () => {
    const hintText = 'hint text';

    render(
        <Select
            id={id}
            label={labelText}
            options={options}
            hintText={hintText}
        />
    );

    const hintTextEl = screen.getByText(hintText);
    const select = screen.getByRole('combobox');

    expect(hintTextEl).toBeInTheDocument();
    expect(select).toHaveAttribute('aria-describedby', hintTextEl.id);
});

test('select with custom name', () => {
    const name = 'foo';

    render(
        <Select
            id={id}
            label={labelText}
            options={options}
            name={name}
        />
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('name', name);
});

test('select with blur function', () => {
    const onBlurFn = vi.fn();
    render(
        <Select
            id={id}
            label={labelText}
            options={options}
            onBlur={onBlurFn}
        />
    );

    const select = screen.getByRole('combobox');

    fireEvent.blur(select);

    expect(onBlurFn).toHaveBeenCalled();
});

test('select with change function', () => {
    const onChangeFn = vi.fn();
    render(
        <Select
            id={id}
            label={labelText}
            options={options}
            onChange={onChangeFn}
        />
    );

    const select = screen.getByRole('combobox');

    fireEvent.change(select, {target: {value: 'button'}});

    expect(onChangeFn).toHaveBeenCalled();
});

test('select with placeholder option', () => {
    const placeholder = 'foo';

    render(
        <Select
            id={id}
            label={labelText}
            options={options}
            placeholder={placeholder}
        />
    );

    const select = screen.getByRole('combobox');
    const firstOption = select.childNodes[0];
    expect(firstOption.textContent).toEqual(placeholder);
    expect(firstOption).toHaveAttribute('value', '');
});

test('select with initial value', () => {
    const initialValue = 'button';

    render(
        <Select
            id={id}
            label={labelText}
            options={options}
            defaultValue={initialValue}
        />
    );

    const select = screen.getByRole('combobox');
    const selectedOption = [].slice.call(select.childNodes).filter(childNode => childNode.selected)[0];
    expect(selectedOption).toHaveAttribute('value', initialValue);
});

test('select with error message', () => {
    const errorMessage = 'This is a required field';
    render(
        <Select
            id={id}
            label={labelText}
            options={options}
            error
            errorMessage={errorMessage}
        />
    );

    const select = screen.getByRole('combobox');
    const selectWrapper = select.parentNode;
    const errorMessageElement = screen.getByText(errorMessage);

    expect(selectWrapper).toHaveClass('ds_input--error')
    expect(select).toHaveAttribute('aria-describedby', errorMessageElement.id);
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass('ds_question__error-message');
});

test('passing additional props', () => {
    render(
        <Select
            id={id}
            label={labelText}
            options={options}
            data-test="foo"
        />
    );

    const select = screen.getByRole('combobox');
    const selectWrapper = select.parentNode;
    expect(selectWrapper?.dataset.test).toEqual('foo');
});
