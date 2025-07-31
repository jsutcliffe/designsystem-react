import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Details from './Details';

const SUMARY_TEXT = 'I can\'t sign in';
const CONTENT = '<p>hello</p>';

test('details renders correctly', () => {

    render(
        <Details summary={SUMARY_TEXT}>
            <p>hello</p>
        </Details>
    );

    const summaryElement = screen.getByText(SUMARY_TEXT);
    const detailsElement = summaryElement.parentElement;
    const textElement = summaryElement.nextElementSibling;

    expect(detailsElement).toHaveClass('ds_details');
    expect(detailsElement?.tagName).toEqual('DETAILS');
    expect(summaryElement).toHaveClass('ds_details__summary');
    expect(summaryElement?.tagName).toEqual('SUMMARY');
    expect(textElement).toHaveClass('ds_details__text');
    expect(textElement?.innerHTML).toEqual(CONTENT);
});

test('passing additional props', () => {
    render(
        <Details data-test="foo" summary={SUMARY_TEXT}>
            <p>hello</p>
        </Details>
    )

    const summaryElement = screen.getByText(SUMARY_TEXT);
    const detailsElement = summaryElement.parentElement;
    expect(detailsElement?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Details className="foo" summary={SUMARY_TEXT}>
            <p>hello</p>
        </Details>
    )

    const summaryElement = screen.getByText(SUMARY_TEXT);
    const detailsElement = summaryElement.parentElement;
    expect(detailsElement).toHaveClass('foo', 'ds_details');
});
