import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioGroup, { Radio } from './RadioButton';

test('radio group renders correct children', () => {
    const ITEMS = [
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
            id: 'none',
            label: 'I do not receive any of these benefits',
        }
    ];
    const GROUP_NAME = "foo"

    render(
        <RadioGroup name={GROUP_NAME} items={ITEMS} />
    );

    const radios = screen.getAllByRole('radio');
    const groupContainer = radios[0].parentElement?.parentElement;
    expect(radios.length).toEqual(ITEMS.length);
    expect(groupContainer).toHaveClass('ds_radios', 'ds_field-group');
});

test('inline radio group', () => {
    const ITEMS = [
        {
            id: 'radio-yes',
            label: 'Yes'
        },
        {
            id: 'radio-no',
            label: 'No'
        }
    ];
    const GROUP_NAME = "yesno"

    render(
        <RadioGroup inline name={GROUP_NAME} items={ITEMS} />
    );


    const radio = screen.getAllByRole('radio')[0];
    const groupContainer = radio.parentElement?.parentElement;
    expect(groupContainer).toHaveClass('ds_field-group--inline');
});

test('radio group passes all expected item params', () => {
    const ONBLUR_FUNCTION = vi.fn();
    const ONCHANGE_FUNCTION = vi.fn();
    const GROUP_NAME = "foo"

    render(
        <RadioGroup name={GROUP_NAME} small items={[
            {
                checked: true,
                exclusive: true,
                hintText: 'hint text',
                id: 'myid',
                label: 'label text',
                onBlur: {ONBLUR_FUNCTION},
                onChange: {ONCHANGE_FUNCTION},
                small: true
            }
        ]}/>
    );

    const radio = screen.getByRole('radio');
    const radioContainer = radio.parentElement;
    const hintText = screen.getByText('hint text');

    expect(radio).toHaveAttribute('checked');
    expect(radio).toHaveAttribute('name', GROUP_NAME);
    expect(radio.id).toEqual('myid');
    expect(radioContainer).toHaveClass('ds_radio--small');
    expect(hintText).toBeInTheDocument();
    expect(radio).toHaveAttribute('aria-describedby', hintText.id);

    // fireEvent.blur(radio);
    // expect(ONBLUR_FUNCTION).toHaveBeenCalled();

    // fireEvent.click(radio);
    // expect(ONCHANGE_FUNCTION).toHaveBeenCalled();
});

test('individual radio renders correctly', () => {
    render(
        <Radio name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');
    const radioContainer = radio.parentElement;
    const label = screen.getByText('Pension Credit');

    expect(radioContainer).toHaveClass('ds_radio');
    expect(radio.tagName).toEqual('INPUT');
    expect(radio).toHaveAttribute('type', 'radio');
    expect(radio.id).toEqual('pensioncredit');
    expect(radio).toHaveAttribute('name', 'benefitType');
    expect(radio).toHaveClass('ds_radio__input');
    expect(label).toHaveAttribute('for', radio.id);
    expect(radio).not.toHaveAttribute('aria-describedby');
    expect(label).toHaveClass('ds_radio__label');
});

test('checked radio', () => {
    render(
        <Radio name="benefitType" checked label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');

    expect(radio).toHaveAttribute('checked')
});

test('radio with blur fn', () => {
    const ONBLUR_FUNCTION = vi.fn();

    render(
        <Radio onBlur={ONBLUR_FUNCTION} name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');

    fireEvent.blur(radio);

    expect(ONBLUR_FUNCTION).toHaveBeenCalled();
});

test('radio with change fn', () => {
    const ONCHANGE_FUNCTION = vi.fn();

    render(
        <Radio onChange={ONCHANGE_FUNCTION} name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');

    fireEvent.click(radio);

    expect(ONCHANGE_FUNCTION).toHaveBeenCalled();
});

test('radio with hint text', () => {
    render(
        <Radio hintText="hint text" name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const hintText = screen.getByText('hint text');
    const radio = screen.getByRole('radio');

    expect(hintText).toBeInTheDocument();
    expect(radio).toHaveAttribute('aria-describedby', hintText.id);
});

test('small radio', () => {
    render(
        <Radio small name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');
    const radioContainer = radio.parentElement;

    expect(radioContainer).toHaveClass('ds_radio--small');
});

test('passing additional props', () => {
    render(
        <RadioGroup data-test="foo" items={[{
            id: 'universal-credit',
            label: 'Universal Credit'
        }]} />
    );

    const radios = screen.getAllByRole('radio');
    const groupContainer = radios[0]?.parentElement?.parentElement;
    expect(groupContainer?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <RadioGroup className="foo" items={[{
            id: 'universal-credit',
            label: 'Universal Credit'
        }]} />
    );

    const radios = screen.getAllByRole('radio');
    const groupContainer = radios[0]?.parentElement?.parentElement;
    expect(groupContainer).toHaveClass('foo', 'ds_radios');
});
