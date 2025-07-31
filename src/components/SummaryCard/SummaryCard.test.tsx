import { test, expect, vi } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import SummaryCard from './SummaryCard';
import SummaryList from '../SummaryList/SummaryList';

const ONCLICK_FUNCTION = vi.fn();

const ACTIONS = [
    {
        title: 'Change',
        href: '#foo'
    },
    {
        title: 'Delete',
        onclick: ONCLICK_FUNCTION
    }
];

const ITEMS = [
    {
        title: 'Phone number',
        value: '0123 456 7890'
    },
    {
        title: 'Address',
        value: `Victoria Quay\nEdinburgh\nEH6 6QQ`
    }
];

const TITLE_TEXT = 'Joe Bloggs';

test('summary card renders correctly', () => {
    const DESCRIBEDBY_ID = 'summary-card-joe-bloggs';

    render(
        <>
            <SummaryCard
                data-testid="foo"
                actions={ACTIONS}
                items={ITEMS}
                title={TITLE_TEXT}
            />

            <SummaryList data-testid="bar" items={ITEMS}/>
        </>
    );

    const summaryCard = screen.getByTestId('foo');
    const title = within(summaryCard).getByRole('heading');
    const header = title.parentElement as HTMLElement;
    const content = header?.nextElementSibling as HTMLElement;
    const actionsList = within(header).getByRole('list')

    const thisList = within(content).getByRole('list');
    const comparisonList = screen.getByTestId('bar');

    expect(summaryCard).toHaveClass('ds_summary-card');

    expect(header).toHaveClass('ds_summary-card__header');
    expect(header?.tagName).toEqual('DIV');

    expect(title).toHaveClass('ds_summary-card__header-title');
    expect(title).toHaveAttribute('id', DESCRIBEDBY_ID);
    expect(title?.tagName).toEqual('H3');
    expect(title.textContent).toEqual(TITLE_TEXT);

    expect(actionsList?.tagName).toEqual('UL');
    expect(actionsList.children.length).toEqual(ACTIONS.length);
    expect(actionsList.children[0]).toHaveClass('ds_summary-card__actions-list-item');
    expect(actionsList.children[0].tagName).toEqual('LI');
    expect(actionsList.children[0].innerHTML).toEqual('<a aria-describedby="summary-card-joe-bloggs" class="ds_link" href="#foo">Change</a>');
    expect(actionsList.children[1].innerHTML).toEqual('<button aria-describedby="summary-card-joe-bloggs" class="ds_link" type="button">Delete</button>');

    fireEvent.click(actionsList.children[1].children[0]);

    expect(ONCLICK_FUNCTION).toHaveBeenCalled();

    expect(content).toHaveClass('ds_summary-card__content');
    expect(content?.tagName).toEqual('DIV');

    expect(thisList?.innerHTML).toEqual(comparisonList?.innerHTML);
});

test('custom heading level', () => {
    render(
        <SummaryCard
            data-testid="foo"
            actions={ACTIONS}
            headingLevel="h2"
            items={ITEMS}
            title={TITLE_TEXT}
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
            actions={ACTIONS}
            items={ITEMS}
            title={TITLE_TEXT}
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
            actions={ACTIONS}
            items={ITEMS}
            title={TITLE_TEXT}
            className="foo"
        />
    );

    const summaryCard = screen.getByTestId('foo');
    expect(summaryCard).toHaveClass('foo', 'ds_summary-card');
});
