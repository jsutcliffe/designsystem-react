import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioGroup, { Radio } from './radio-button';

test('radio group renders correct children', () => {
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
            id: 'none',
            label: 'I do not receive any of these benefits',
        }
    ];
    const groupName = "foo"

    render(
        <RadioGroup name={groupName} items={items} />
    );

    const radios = screen.getAllByRole('radio');
    const groupContainer = radios[0].parentElement?.parentElement;
    expect(radios.length).toEqual(items.length);
    expect(groupContainer).toHaveClass('ds_radios', 'ds_field-group');
});

test('inline radio group', () => {
    const items = [
        {
            id: 'radio-yes',
            label: 'Yes'
        },
        {
            id: 'radio-no',
            label: 'No'
        }
    ];
    const groupName = "yesno"

    render(
        <RadioGroup inline name={groupName} items={items} />
    );


    const radio = screen.getAllByRole('radio')[0];
    const groupContainer = radio.parentElement?.parentElement;
    expect(groupContainer).toHaveClass('ds_field-group--inline');
});

test('radio group passes all expected item params', () => {
    const onBlurFn = vi.fn();
    const onChangeFn = vi.fn();
    const groupName = "foo"

    render(
        <RadioGroup name={groupName} small items={[
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

    const radio = screen.getByRole('radio');
    const radioContainer = radio.parentElement;
    const hintText = screen.getByText('hint text');

    expect(radio).toHaveAttribute('checked');
    expect(radio).toHaveAttribute('name', groupName);
    expect(radio.id).toEqual('myid');
    expect(radioContainer).toHaveClass('ds_radio--small');
    expect(hintText).toBeInTheDocument();
    expect(radio).toHaveAttribute('aria-describedby', hintText.id);

    // fireEvent.blur(radio);
    // expect(onBlurFn).toHaveBeenCalled();

    // fireEvent.click(radio);
    // expect(onChangeFn).toHaveBeenCalled();
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
    const onBlurFn = vi.fn();

    render(
        <Radio onBlur={onBlurFn} name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');

    fireEvent.blur(radio);

    expect(onBlurFn).toHaveBeenCalled();
});

test('radio with change fn', () => {
    const onChangeFn = vi.fn();

    render(
        <Radio onChange={onChangeFn} name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');

    fireEvent.click(radio);

    expect(onChangeFn).toHaveBeenCalled();
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
