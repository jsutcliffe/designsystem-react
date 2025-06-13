import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import PageHeader from './page-header';

const labelText = 'Guide';
const titleText = 'Apply for or renew a disabled parking permit';

test('notification banner renders correctly', () => {
    render(
        <PageHeader label={labelText} title={titleText}/>
    );

    const header = screen.getByRole('banner');
    const title = within(header).getByRole('heading');
    const label = title.previousSibling;;

    expect(header).toHaveClass('ds_page-header');
    expect(header.tagName).toEqual('HEADER');

    expect(label).toHaveClass('ds_page-header__label', 'ds_content-label');
    expect(label?.textContent).toEqual(labelText);
    expect(label?.tagName).toEqual('SPAN');

    expect(title).toHaveClass('ds_page-header__title');
    expect(title.textContent).toEqual(titleText);
    expect(title.tagName).toEqual('H1');
});

test('header with no label', () => {
    render(
        <PageHeader title={titleText}/>
    );

    const header = screen.getByRole('banner');
    const title = within(header).getByRole('heading');
    const label = title.previousSibling;

    expect(label).not.toBeInTheDocument();
});

test('passing additional props', () => {
    render(
       <PageHeader data-test="foo" label={labelText} title={titleText}/>
    )

    const header = screen.getByRole('banner');
    expect(header?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
       <PageHeader className="foo" label={labelText} title={titleText}/>
    )

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('foo', 'ds_page-header');
});
