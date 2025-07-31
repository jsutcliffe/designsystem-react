import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SummaryList, { Item, Action, Answer } from './SummaryList';

const ONCLICK_FUNCTION = vi.fn();

const SUMMARY_ITEMS = [
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
                onclick: ONCLICK_FUNCTION
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
        <SummaryList items={SUMMARY_ITEMS} />
    );

    const summaryList = screen.getAllByRole('list')[0];
    const summaryListItems = summaryList.children;

    expect(summaryList).toHaveClass('ds_summary-list');
    expect(summaryList.tagName).toEqual('OL');
    expect(summaryListItems.length).toEqual(SUMMARY_ITEMS.length);
});

test('summary list without border', () => {
    render(
        <SummaryList noBorder items={SUMMARY_ITEMS} />
    );

    const summaryList = screen.getAllByRole('list')[0];

    expect(summaryList).toHaveClass('ds_summary-list--no-border');
});

test('summary list item renders correctly', () => {
    const DESCRIBEDBY_ID = 'q2-date-of-birth';

    render(
        <Item
            actions={SUMMARY_ITEMS[1].actions}
            title={SUMMARY_ITEMS[1].title}
            value={SUMMARY_ITEMS[1].value}
        />
    );

    const item = screen.getAllByRole('listitem')[0];
    const key = item.querySelector('.ds_summary-list__key');
    const value = item.querySelector('.ds_summary-list__value');
    const answer = value?.children[0];
    const actions = item.querySelector('.ds_summary-list__actions');

    expect(item).toHaveClass('ds_summary-list__item');

    expect(key?.tagName).toEqual('SPAN');
    expect(key?.textContent).toEqual('Date of birth');
    expect(key).toHaveAttribute('id', DESCRIBEDBY_ID);

    expect(value?.tagName).toEqual('SPAN');

    expect(answer).toHaveClass('ds_summary-list__answer');
    expect(answer?.tagName).toEqual('Q');

    expect(actions?.tagName).toEqual('DIV');

    expect(actions?.querySelector('.ds_link')).toHaveAttribute('aria-describedby', DESCRIBEDBY_ID);
});

test('summary list item with multiple values', () => {
    render(
        <Item
            actions={SUMMARY_ITEMS[3].actions}
            title={SUMMARY_ITEMS[3].title}
            value={SUMMARY_ITEMS[3].value}
        />
    );

    const item = screen.getAllByRole('listitem')[0];
    const value = item.querySelector('.ds_summary-list__value');
    const valueList = value?.children[0];
    const valueListItems = valueList?.children as HTMLCollection;

    expect(valueList).toHaveClass('ds_no-bullets');
    expect(valueList?.tagName).toEqual('UL');

    expect(valueListItems?.length).toEqual(SUMMARY_ITEMS[3].value.length);

    expect(valueListItems[0].tagName).toEqual('LI');
    expect(valueListItems[0].innerHTML).toEqual(`<q class="ds_summary-list__answer">${SUMMARY_ITEMS[3].value[0]}</q>`);
});

test('summary list item with no value', () => {
    render(
        <Item
            actions={SUMMARY_ITEMS[3].actions}
            title={SUMMARY_ITEMS[3].title}
        />
    );

    const item = screen.getAllByRole('listitem')[0];
    const value = item.querySelector('.ds_summary-list__value');
    const answer = value?.children[0];

    expect(answer?.textContent).toEqual('');
});

test('summary list item with multiple actions', () => {
    const ITEM_TITLE = 'Name';
    const ITEM_VALUE = 'Jane Smith';
    const ITEM_ACTIONS = [
        {
            title: 'Change',
            href: '#foo'
        },
        {
            title: 'Delete',
            onclick: ONCLICK_FUNCTION
        }
    ];

    render(
        <Item
            actions={SUMMARY_ITEMS[0].actions}
            title={ITEM_TITLE}
            value={ITEM_VALUE}
        />
    );

    const item = screen.getAllByRole('listitem')[0];
    const actionsElement = item.querySelector('.ds_summary-list__actions');

    expect(actionsElement?.children.length).toEqual(ITEM_ACTIONS.length);
    expect(actionsElement?.children[0].textContent).toEqual(ITEM_ACTIONS[0].title);
    expect(actionsElement?.children[1].textContent).toEqual(ITEM_ACTIONS[1].title);
});

test('button action', () => {
    const DESCRIBEDBY_ID = 'q1-name';
    const ACTION_TITLE = 'Name';
    const ACTION_ONCLICK = ONCLICK_FUNCTION;

    render(
        <Action
            describedby={DESCRIBEDBY_ID}
            href={undefined}
            onclick={ACTION_ONCLICK}
            title={ACTION_TITLE}
        />
    );

    const action = screen.getByRole('button');

    expect(action).toHaveClass('ds_link');
    expect(action).toHaveAttribute('aria-describedby', DESCRIBEDBY_ID);
    expect(action).toHaveAttribute('type', 'button');
    expect(action).not.toHaveAttribute('href');
    expect(action.tagName).toEqual('BUTTON');
    expect(action.textContent).toEqual(ACTION_TITLE);

    fireEvent.click(action);

    expect(ONCLICK_FUNCTION).toHaveBeenCalled();
});

test('link action', () => {
    const DESCRIBEDBY_ID = 'q1-name';
    const ACTION_TITLE = 'Name';
    const ACTION_HREF = "#foo"
    const ACTION_ONCLICK = ONCLICK_FUNCTION;

    render(
        <Action
            describedby={DESCRIBEDBY_ID}
            href={ACTION_HREF}
            onclick={ACTION_ONCLICK}
            title={ACTION_TITLE}
        />
    );

    const action = screen.getByRole('link');

    expect(action).toHaveClass('ds_link');
    expect(action).toHaveAttribute('aria-describedby', DESCRIBEDBY_ID);
    expect(action).toHaveAttribute('href', ACTION_HREF);
    expect(action).not.toHaveAttribute('type');
    expect(action.tagName).toEqual('A');
    expect(action.textContent).toEqual(ACTION_TITLE);
});

test('multiline answer', () => {
    render(
        <Answer value={SUMMARY_ITEMS[2].value} />
    );

    const answer = document.querySelector('.ds_summary-list__answer');

    expect(answer?.outerHTML).toEqual('<q class="ds_summary-list__answer">Scottish Government<br>St Andrew\'s House<br>Regent Road<br>Edinburgh<br>EH1 3DG</q>');
});

test('passing additional props', () => {
    render(
        <SummaryList data-test="foo" items={SUMMARY_ITEMS} />
    );

    const summaryList = screen.getAllByRole('list')[0];
    expect(summaryList?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SummaryList className="foo" items={SUMMARY_ITEMS} />
    );

    const summaryList = screen.getAllByRole('list')[0];
    expect(summaryList).toHaveClass('foo', 'ds_summary-list');
});
