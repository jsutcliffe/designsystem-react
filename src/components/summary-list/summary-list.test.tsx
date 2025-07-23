import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SummaryList, { Item, Action, Answer } from './summary-list';

const onClickFn = vi.fn();

const items = [
    {
        title: 'Name',
        value: 'Jane Smith',
        actions: [
            {
                title: 'Change',
                href: '#foo'
            },
            {
                title: 'Delete',
                onclick: onClickFn
            }
        ]
    },
    {
        title: 'Date of birth',
        value: '13 April 2001',
        actions: [
            {
                title: 'Change',
                href: '#bar'
            }
        ]
    },
    {
        title: 'Address',
        value: `Scottish Government\nSt Andrew's House\nRegent Road\nEdinburgh\nEH1 3DG`,
        actions: [
            {
                title: 'Change',
                href: '#baz'
            }
        ]
    },
    {
        title: 'Contact details',
        value: [
            'email@gov.scot',
            '0123 456 7890',
        ]
    }
];

test('summary list renders correctly', () => {
    render(
        <SummaryList items={items} />
    );

    const summaryList = screen.getAllByRole('list')[0];
    const summaryListItems = summaryList.children;

    expect(summaryList).toHaveClass('ds_summary-list');
    expect(summaryList.tagName).toEqual('OL');
    expect(summaryListItems.length).toEqual(items.length);
});

test('summary list without border', () => {
    render(
        <SummaryList noBorder items={items} />
    );

    const summaryList = screen.getAllByRole('list')[0];

    expect(summaryList).toHaveClass('ds_summary-list--no-border');
});

test('summary list item renders correctly', () => {
    render(
        <Item
            actions={items[1].actions}
            title={items[1].title}
            value={items[1].value}
        />
    );

    const item = screen.getAllByRole('listitem')[0];
    const key = item.querySelector('.ds_summary-list__key');
    const value = item.querySelector('.ds_summary-list__value');
    const answer = value?.children[0];
    const actions = item.querySelector('.ds_summary-list__actions');

    const describedById = 'q2-date-of-birth';

    expect(item).toHaveClass('ds_summary-list__item');

    expect(key?.tagName).toEqual('SPAN');
    expect(key?.textContent).toEqual('Date of birth');
    expect(key).toHaveAttribute('id', describedById);

    expect(value?.tagName).toEqual('SPAN');

    expect(answer).toHaveClass('ds_summary-list__answer');
    expect(answer?.tagName).toEqual('Q');

    expect(actions?.tagName).toEqual('DIV');

    expect(actions?.querySelector('.ds_link')).toHaveAttribute('aria-describedby', describedById);
});

test('summary list item with multiple values', () => {
    render(
        <Item
            actions={items[3].actions}
            title={items[3].title}
            value={items[3].value}
        />
    );

    const item = screen.getAllByRole('listitem')[0];
    const value = item.querySelector('.ds_summary-list__value');
    const valueList = value?.children[0];
    const valueListItems = valueList?.children as HTMLCollection;

    expect(valueList).toHaveClass('ds_no-bullets');
    expect(valueList?.tagName).toEqual('UL');

    expect(valueListItems?.length).toEqual(items[3].value.length);

    expect(valueListItems[0].tagName).toEqual('LI');
    expect(valueListItems[0].innerHTML).toEqual(`<q class="ds_summary-list__answer">${items[3].value[0]}</q>`);
});

test('summary list item with no value', () => {
    render(
        <Item
            actions={items[3].actions}
            title={items[3].title}
        />
    );

    const item = screen.getAllByRole('listitem')[0];
    const value = item.querySelector('.ds_summary-list__value');
    const answer = value?.children[0];

    expect(answer?.textContent).toEqual('');
});

test('summary list item with multiple actions', () => {
    const title = 'Name';
    const value = 'Jane Smith';
    const actions = [
        {
            title: 'Change',
            href: '#foo'
        },
        {
            title: 'Delete',
            onclick: onClickFn
        }
    ];

    render(
        <Item
            actions={items[0].actions}
            title={title}
            value={value}
        />
    );

    const item = screen.getAllByRole('listitem')[0];
    const actionsElement = item.querySelector('.ds_summary-list__actions');

    expect(actionsElement?.children.length).toEqual(actions.length);
    expect(actionsElement?.children[0].textContent).toEqual(actions[0].title);
    expect(actionsElement?.children[1].textContent).toEqual(actions[1].title);
});

test('button action', () => {
    const describedById = 'q1-name';
    const title = 'Name';
    const href = "#foo"
    const onClick = onClickFn;

    render(
        <Action
            describedby={describedById}
            href={href}
            onclick={onClick}
            title={title}
        />
    );

    const action = screen.getByRole('button');

    expect(action).toHaveClass('ds_link');
    expect(action).toHaveAttribute('aria-describedby', describedById);
    expect(action).toHaveAttribute('type', 'button');
    expect(action).not.toHaveAttribute('href');
    expect(action.tagName).toEqual('BUTTON');
    expect(action.textContent).toEqual('Delete');

    fireEvent.click(action);

    expect(onClickFn).toHaveBeenCalled();
});

test('link action', () => {
    const describedById = 'q1-name';
    const title = 'Name';
    const href = "#foo"
    const onClick = onClickFn;

    render(
        <Action
            describedby={describedById}
            href={href}
            onclick={onClick}
            title={title}
        />
    );

    const action = screen.getByRole('link');

    expect(action).toHaveClass('ds_link');
    expect(action).toHaveAttribute('aria-describedby', describedById);
    expect(action).toHaveAttribute('href', href);
    expect(action).not.toHaveAttribute('type');
    expect(action.tagName).toEqual('A');
    expect(action.textContent).toEqual('Change');
});

test('multiline answer', () => {
    render(
        <Answer value={items[2].value} />
    );

    const answer = document.querySelector('.ds_summary-list__answer');

    expect(answer?.outerHTML).toEqual('<q class="ds_summary-list__answer">Scottish Government<br>St Andrew\'s House<br>Regent Road<br>Edinburgh<br>EH1 3DG</q>');
});

test('passing additional props', () => {
    render(
        <SummaryList data-test="foo" items={items} />
    );

    const summaryList = screen.getAllByRole('list')[0];
    expect(summaryList?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SummaryList className="foo" items={items} />
    );

    const summaryList = screen.getAllByRole('list')[0];
    expect(summaryList).toHaveClass('foo', 'ds_summary-list');
});
