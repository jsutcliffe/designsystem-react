import { test, expect, vi } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import SummaryCard from './summary-card';
import SummaryList from '../summary-list/summary-list';

const onClickFn = vi.fn();

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

const items = [
    {
        title: 'Phone number',
        value: '0123 456 7890'
    },
    {
        title: 'Address',
        value: `Victoria Quay\nEdinburgh\nEH6 6QQ`
    }
];

const titleText = 'Joe Bloggs';

test('summary card renders correctly', () => {
    render(
        <>
            <SummaryCard
                data-testid="foo"
                actions={actions}
                items={items}
                title={titleText}
            />

            <SummaryList data-testid="bar" items={items}/>
        </>
    );

    const summaryCard = screen.getByTestId('foo');
    const title = within(summaryCard).getByRole('heading');
    const header = title.parentElement;
    const content = header?.nextSibling;
    const actionsList = within(header).getByRole('list')

    const thisList = within(content).getByRole('list');
    const comparisonList = screen.getByTestId('bar');

    const describedById = 'summary-card-joe-bloggs';

    expect(summaryCard).toHaveClass('ds_summary-card');

    expect(header).toHaveClass('ds_summary-card__header');
    expect(header?.tagName).toEqual('DIV');

    expect(title).toHaveClass('ds_summary-card__header-title');
    expect(title).toHaveAttribute('id', describedById);
    expect(title?.tagName).toEqual('H3');
    expect(title.textContent).toEqual(titleText);

    expect(actionsList?.tagName).toEqual('UL');
    expect(actionsList.children.length).toEqual(actions.length);
    expect(actionsList.children[0]).toHaveClass('ds_summary-card__actions-list-item');
    expect(actionsList.children[0].tagName).toEqual('LI');
    expect(actionsList.children[0].innerHTML).toEqual('<a aria-describedby="summary-card-joe-bloggs" class="ds_link" href="#foo">Change</a>');
    expect(actionsList.children[1].innerHTML).toEqual('<button aria-describedby="summary-card-joe-bloggs" class="ds_link" type="button">Delete</button>');

    fireEvent.click(actionsList.children[1].children[0]);

    expect(onClickFn).toHaveBeenCalled();

    expect(content).toHaveClass('ds_summary-card__content');
    expect(content?.tagName).toEqual('DIV');

    expect(thisList?.innerHTML).toEqual(comparisonList?.innerHTML);
});

test('custom header level', () => {
    render(
        <SummaryCard
            data-testid="foo"
            actions={actions}
            headerLevel="h2"
            items={items}
            title={titleText}
        />
    );

    const summaryCard = screen.getByTestId('foo');
    const title = within(summaryCard).getByRole('heading');

    expect(title?.tagName).toEqual('H2');
});

test('passing additional props', () => {
    render(
        <SummaryCard
            data-testid="foo"
            actions={actions}
            items={items}
            title={titleText}
            data-test="foo"
        />
    );

    const summaryCard = screen.getByTestId('foo');
    expect(summaryCard?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SummaryCard
            data-testid="foo"
            actions={actions}
            items={items}
            title={titleText}
            className="foo"
        />
    );

    const summaryCard = screen.getByTestId('foo');
    expect(summaryCard).toHaveClass('foo', 'ds_summary-card');
});
