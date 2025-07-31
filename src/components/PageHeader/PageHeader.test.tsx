import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import PageHeader from './PageHeader';

const LABEL_TEXT = 'Guide';
const TITLE_TEXT = 'Apply for or renew a disabled parking permit';

test('notification banner renders correctly', () => {
    render(
        <PageHeader label={LABEL_TEXT} title={TITLE_TEXT}/>
    );

    const header = screen.getByRole('banner');
    const title = within(header).getByRole('heading');
    const label = title.previousElementSibling;

    expect(header).toHaveClass('ds_page-header');
    expect(header.tagName).toEqual('HEADER');

    expect(label).toHaveClass('ds_page-header__label', 'ds_content-label');
    expect(label?.textContent).toEqual(LABEL_TEXT);
    expect(label?.tagName).toEqual('SPAN');

    expect(title).toHaveClass('ds_page-header__title');
    expect(title.textContent).toEqual(TITLE_TEXT);
    expect(title.tagName).toEqual('H1');
});

test('header with no label', () => {
    render(
        <PageHeader title={TITLE_TEXT}/>
    );

    const header = screen.getByRole('banner');
    const title = within(header).getByRole('heading');
    const label = title.previousElementSibling;

    expect(label).not.toBeInTheDocument();
});

test('passing additional props', () => {
    render(
       <PageHeader data-test="foo" label={LABEL_TEXT} title={TITLE_TEXT}/>
    )

    const header = screen.getByRole('banner');
    expect(header?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
       <PageHeader className="foo" label={LABEL_TEXT} title={TITLE_TEXT}/>
    )

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('foo', 'ds_page-header');
});
