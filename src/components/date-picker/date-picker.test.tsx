import { test, expect, vi } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import DatePicker from './date-picker';

const labelText = 'Date of birth';
const id = 'date-picker';

test('date picker renders correctly', () => {
    render(
        <DatePicker
            id={id}
            label={labelText}
        />
    );

    // a little hacky. maybe testid would be better?
    const datePicker = screen.getAllByRole('generic')[1];
    const label = within(datePicker).getByText(labelText);
    const textInput = within(datePicker).getByRole('textbox');

    expect(datePicker).toHaveClass('ds_datepicker');
    expect(label).toHaveClass('ds_label');
    expect(label).toHaveAttribute('for', textInput.id);
    expect(label.tagName).toEqual('LABEL');
    expect(textInput).toHaveClass('ds_input', 'ds_input--fixed-10');
    expect(textInput.id).toEqual(id);

    // todo: check for DS script being fired
});

test('date picker with disabled dates', () => {
    const disabledDates = '18/05/2023 19/05/2023'
    render(
        <DatePicker
            id={id}
            label={labelText}
            disabledDates={disabledDates}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];

    expect(datePicker).toHaveAttribute('data-disableddates', disabledDates);
});

test('date picker with hint text', () => {
    const hintText = 'My hint text'
    render(
        <DatePicker
            id={id}
            label={labelText}
            hintText={hintText}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];
    const hintTextEl = screen.getByText(hintText);
    const textInput = within(datePicker).getByRole('textbox');

    expect(hintTextEl).toBeInTheDocument();
    expect(textInput).toHaveAttribute('aria-describedby', hintTextEl.id);
});

test('date picker with custom icon path', () => {
    const iconPath = '/my/icon/path'
    render(
        <DatePicker
            id={id}
            label={labelText}
            iconPath={iconPath}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];
    const label = within(datePicker).getByText(labelText);
    const textInput = within(datePicker).getByRole('textbox');

    // todo
});

test('date picker with max date', () => {
    const maxDate = '28/05/2023'
    render(
        <DatePicker
            id={id}
            label={labelText}
            maxDate={maxDate}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];

    expect(datePicker).toHaveAttribute('data-maxDate', maxDate);
});

test('date picker with min date', () => {
    const minDate = '28/05/2023'
    render(
        <DatePicker
            id={id}
            label={labelText}
            minDate={minDate}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];

    expect(datePicker).toHaveAttribute('data-mindate', minDate);
});

test('date picker with blur fn', () => {
    const onBlurFn = vi.fn();
    render(
        <DatePicker
            id={id}
            label={labelText}
            onBlur={onBlurFn}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];
    const textInput = within(datePicker).getByRole('textbox');

    fireEvent.blur(textInput);

    expect(onBlurFn).toHaveBeenCalled();
});

test('date picker with change fn', () => {
    const onChangeFn = vi.fn();
    render(
        <DatePicker
            id={id}
            label={labelText}
            onChange={onChangeFn}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];
    const textInput = within(datePicker).getByRole('textbox');

    fireEvent.change(textInput, {target: {value: 'foo'}});

    expect(onChangeFn).toHaveBeenCalled();
});

test('date picker with initial value', () => {
    const initialValue = '28/05/2023';
    render(
        <DatePicker
            id={id}
            label={labelText}
            value={initialValue}
        />
    );
    const datePicker = screen.getAllByRole('generic')[1];
    const textInput = within(datePicker).getByRole('textbox');

    expect(textInput).toHaveValue(initialValue);
});

test('date picker with multiple inputs', () => {
    const initialValue = '28/05/2023';
    render(
        <DatePicker
            id={id}
            label={labelText}
            multiple
            value={initialValue}
        />
    );

    const datePicker = screen.getAllByRole('generic')[1];
    const textInputs = within(datePicker).getAllByRole('textbox');
    const dateInput = textInputs[0];
    const monthInput = textInputs[1];
    const yearInput = textInputs[2];
    const dateLabel = within(datePicker).getByText('Day');
    const monthLabel = within(datePicker).getByText('Month');
    const yearLabel = within(datePicker).getByText('Year');

    expect(textInputs.length).toEqual(3);

    expect(dateInput).toHaveValue(initialValue.split('/')[0]);
    expect(monthInput).toHaveValue(initialValue.split('/')[1]);
    expect(yearInput).toHaveValue(initialValue.split('/')[2]);

    expect(dateInput).toHaveAttribute('id', `${id}-day`);
    expect(monthInput).toHaveAttribute('id', `${id}-month`);
    expect(yearInput).toHaveAttribute('id', `${id}-year`);

    expect(dateInput).toHaveClass('ds_input', 'ds_input--fixed-2', 'js-datepicker-date');
    expect(monthInput).toHaveClass('ds_input', 'ds_input--fixed-2', 'js-datepicker-month');
    expect(yearInput).toHaveClass('ds_input', 'ds_input--fixed-4', 'js-datepicker-year');

    expect(dateLabel).toHaveClass('ds_label');
    expect(monthLabel).toHaveClass('ds_label');
    expect(yearLabel).toHaveClass('ds_label');

    expect(dateLabel).toHaveAttribute('for', dateInput.id);
    expect(monthLabel).toHaveAttribute('for', monthInput.id);
    expect(yearLabel).toHaveAttribute('for', yearInput.id);
});

test('passing additional props', () => {
    render(
        <DatePicker
            id={id}
            label={labelText}
            data-test="foo"
        />
    )

    const datePicker = screen.getAllByRole('generic')[1];
    expect(datePicker?.dataset.test).toEqual('foo');
});
