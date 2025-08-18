import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

test('checkbox group renders correctly', () => {
    render(
        <CheckboxGroup data-testid="checkboxgroup">
            <Checkbox id="banana" label="Banana" />
            Foo
        </CheckboxGroup>
    );
    const checkboxGroup = screen.getByTestId('checkboxgroup');
    expect(checkboxGroup).toHaveClass('ds_checkboxes', 'ds_field-group');

    const checkbox = screen.getByRole('checkbox');
    const checkboxContainer = checkbox.parentElement;
    expect(checkboxContainer).not.toHaveClass('ds_checkbox--small');
});

test('passing additional props', () => {
    render(
        <CheckboxGroup data-testid="checkboxgroup" data-test="foo" />
    );

    const checkboxGroup = screen.getByTestId('checkboxgroup');
    expect(checkboxGroup?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <CheckboxGroup data-testid="checkboxgroup" className="foo" />
    );

    const checkboxGroup = screen.getByTestId('checkboxgroup');
    expect(checkboxGroup).toHaveClass('foo', 'ds_checkboxes');
});
