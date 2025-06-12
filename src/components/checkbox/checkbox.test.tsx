import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxGroup, { Checkbox } from './checkbox';

test('checkbox group renders correct children', () => {
    const items = [
        {
            id: 'universal-credit',
            label: 'Universal Credit',
            checked: true
        },
        {
            id: 'pensioncredit',
            label: 'Pension Credit'
        },
        {
            id: 'jsa',
            label: 'Income-based Job Seeker\'s Allowance',
        },
        {
            exclusive: true,
            id: 'none',
            label: 'No, I do not receive any of these benefits',
        }
    ];

    render(
        <CheckboxGroup items={items} />
    );

    const checkboxes = screen.getAllByRole('checkbox');
    const groupContainer = checkboxes[0].parentNode.parentNode;
    expect(checkboxes.length).toEqual(items.length);
    expect(groupContainer).toHaveClass('ds_checkboxes', 'ds_field-group');
});

test('checkbox group passes all expected item params', () => {
    const onBlurFn = vi.fn();
    const onChangeFn = vi.fn();

    render(
        <CheckboxGroup small items={[
            {
                checked: true,
                exclusive: true,
                hintText: 'hint text',
                id: 'myid',
                label: 'label text',
                onBlur: {onBlurFn},
                onChange: {onChangeFn},
                small: true
            }
        ]}/>
    );

    const checkbox = screen.getByRole('checkbox');
    const checkboxContainer = checkbox.parentNode;
    const hintText = screen.getByText('hint text');

    expect(checkbox).toHaveAttribute('data-behaviour', 'exclusive');
    expect(checkbox).toHaveAttribute('checked');
    expect(checkbox.id).toEqual('myid');
    expect(checkboxContainer).toHaveClass('ds_checkbox--small');
    expect(hintText).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('aria-describedby', hintText.id);

    // fireEvent.blur(checkbox);
    // expect(onBlurFn).toHaveBeenCalled();

    // fireEvent.click(checkbox);
    // expect(onChangeFn).toHaveBeenCalled();
});

test('individual checkbox renders correctly', () => {
    render(
        <Checkbox label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');
    const checkboxContainer = checkbox.parentNode;
    const label = screen.getByText('Pension Credit');

    expect(checkboxContainer).toHaveClass('ds_checkbox');
    expect(checkbox.tagName).toEqual('INPUT');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox.id).toEqual('pensioncredit');
    expect(checkbox).toHaveAttribute('name', checkbox.id);
    expect(checkbox).toHaveClass('ds_checkbox__input');
    expect(label).toHaveAttribute('for', checkbox.id);
    expect(checkbox).not.toHaveAttribute('aria-describedby');
    expect(label).toHaveClass('ds_checkbox__label');
});

test('checked checkbox', () => {
    render(
        <Checkbox checked label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('checked')
});

test('exclusive checkbox', () => {
    render(
        <Checkbox exclusive label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');
    const separator = checkbox.parentNode?.previousSibling;

    expect(checkbox).toHaveAttribute('data-behaviour', 'exclusive');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass('ds_checkbox-separator');
    expect(separator.textContent).toEqual('or');
});

test('checkbox with blur fn', () => {
    const onBlurFn = vi.fn();

    render(
        <Checkbox onBlur={onBlurFn} label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');

    fireEvent.blur(checkbox);

    expect(onBlurFn).toHaveBeenCalled();
});

test('checkbox with change fn', () => {
    const onChangeFn = vi.fn();

    render(
        <Checkbox onChange={onChangeFn} label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onChangeFn).toHaveBeenCalled();
});

test('checkbox with hint text', () => {
    render(
        <Checkbox hintText="hint text" label="Pension Credit" id="pensioncredit" />
    );

    const hintText = screen.getByText('hint text');
    const checkbox = screen.getByRole('checkbox');

    expect(hintText).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('aria-describedby', hintText.id);
});

test('small checkbox', () => {
    render(
        <Checkbox small label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');
    const checkboxContainer = checkbox.parentNode;

    expect(checkboxContainer).toHaveClass('ds_checkbox--small');
});

test('passing additional props', () => {
    render(
        <CheckboxGroup data-test="foo" items={[{
            id: 'universal-credit',
            label: 'Universal Credit'
        }]} />
    );

    const checkboxes = screen.getAllByRole('checkbox');
    const groupContainer = checkboxes[0]?.parentNode?.parentNode;
    expect(groupContainer?.dataset.test).toEqual('foo');
});
