import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Details from './details';

const summaryText = 'I can\'t sign in';
const content = '<p>hello</p>';

test('details renders correctly', () => {

    render(
        <Details summary={summaryText}>
            <p>hello</p>
        </Details>
    );

    const summaryElement = screen.getByText(summaryText);
    const detailsElement = summaryElement.parentNode;
    const textElement = summaryElement.nextSibling;

    expect(detailsElement).toHaveClass('ds_details');
    expect(detailsElement.tagName).toEqual('DETAILS');
    expect(summaryElement).toHaveClass('ds_details__summary');
    expect(summaryElement.tagName).toEqual('SUMMARY');
    expect(textElement).toHaveClass('ds_details__text');
    expect(textElement.innerHTML).toEqual(content);
});

test('passing additional props', () => {
    render(
        <Details data-test="foo" summary={summaryText}>
            <p>hello</p>
        </Details>
    )

    const summaryElement = screen.getByText(summaryText);
    const detailsElement = summaryElement.parentNode;
    expect(detailsElement?.dataset.test).toEqual('foo');
});
