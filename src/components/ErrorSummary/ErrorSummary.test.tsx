import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ErrorSummary from './ErrorSummary';

const ERRORS = [
    { fragmentId: 'did-resolve', title: 'Did this resolve your issue?' },
    { fragmentId: 'what-topics', title: 'What topics are you interested in?' },
    { fragmentId: 'more-detail', title: 'Please provide more detail' }
];

test('error summary renders correctly', () => {
    const TITLE_ID = 'error-summary-title';

    render(
        <ErrorSummary data-testid="errorsummary" errors={ERRORS} />
    );

    const errorSummaryElement = screen.getByTestId('errorsummary');
    const errorSummaryTitle = within(errorSummaryElement).getByRole('heading');
    const errorSummaryList = within(errorSummaryElement).getByRole('list');
    const errorSummaryItems = within(errorSummaryList).getAllByRole('listitem');
    const errorSummaryLink1 = within(errorSummaryItems[0]).getByRole('link');

    expect(errorSummaryElement).toHaveClass('ds_error-summary');
    expect(errorSummaryElement).toHaveAttribute('role', 'alert');
    expect(errorSummaryElement).toHaveAttribute('aria-labelledby', errorSummaryTitle.id);
    expect(errorSummaryElement.tagName).toEqual('DIV');

    expect(errorSummaryTitle).toHaveClass('ds_error-summary__title');
    expect(errorSummaryTitle).toHaveAttribute('id', TITLE_ID);
    expect(errorSummaryTitle.tagName).toEqual('H2');
    expect(errorSummaryTitle.textContent).toEqual('There is a problem');

    expect(errorSummaryList).toHaveClass('ds_error-summary__list');
    expect(errorSummaryList.tagName).toEqual('UL');

    expect(errorSummaryItems.length).toEqual(ERRORS.length);

    expect(errorSummaryLink1).toHaveAttribute('href', `#${ERRORS[0].fragmentId}`);
    expect(errorSummaryLink1.textContent).toEqual(ERRORS[0].title);
});

test('error summary with custom title', () => {
    const TITLE_TEXT = 'Foo';

    render(
        <ErrorSummary data-testid="errorsummary" errors={ERRORS} title={TITLE_TEXT} />
    );

    const errorSummaryElement = screen.getByTestId('errorsummary');
    const errorSummaryTitle = within(errorSummaryElement).getByRole('heading');

    expect(errorSummaryTitle.textContent).toEqual(TITLE_TEXT);
});

test('error summary with no errors (empty array) should not display', () => {
    render(
        <ErrorSummary data-testid="errorsummary" errors={[]} />
    );

    const errorSummaryElement = screen.queryByTestId('errorsummary');

    expect(errorSummaryElement).not.toBeInTheDocument();
});

test('error summary with no errors (no errors prop) should not display', () => {
    render(
        <ErrorSummary data-testid="errorsummary" />
    );

    const errorSummaryElement = screen.queryByTestId('errorsummary');

    expect(errorSummaryElement).not.toBeInTheDocument();
});

test('error sumary item with no link', () => {
    render(
        <ErrorSummary data-testid="errorsummary" errors={[{ title: 'Did this resolve your issue?' }]} />
    );

    const errorSummaryElement = screen.getByTestId('errorsummary');
    const errorSummaryItems = within(errorSummaryElement).getAllByRole('listitem');
    const errorSummaryLink1 = within(errorSummaryItems[0]).queryByRole('link');

    expect(errorSummaryItems[0].textContent).toEqual('Did this resolve your issue?')
    expect(errorSummaryLink1).not.toBeInTheDocument();
});

test('passing additional props', () => {
    render(
        <ErrorSummary data-testid="errorsummary" errors={ERRORS} data-test="foo" />
    )

    const errorSummaryElement = screen.getByTestId('errorsummary');
    expect(errorSummaryElement?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <ErrorSummary data-testid="errorsummary" errors={ERRORS} className="foo" />
    )

    const errorSummaryElement = screen.getByTestId('errorsummary');
    expect(errorSummaryElement).toHaveClass('foo', 'ds_error-summary');
});
