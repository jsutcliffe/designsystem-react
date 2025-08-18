import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';

const LINK_HREF = '#home';
const LINK_TEXT = 'Home';

test('breadcrumbs render correctly', () => {
    render(
        <Breadcrumbs>
            <Breadcrumbs.Item href="home">Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href="category">Category</Breadcrumbs.Item>
            <Breadcrumbs.Item>Page</Breadcrumbs.Item>
        </Breadcrumbs>
    );

    const nav = screen.getByRole('navigation');
    const list = within(nav).getByRole('list');
    const listItems = within(list).getAllByRole('listitem');

    // check nav
    expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');

    // check list
    expect(list.tagName).toEqual('OL');
    expect(list).toHaveClass('ds_breadcrumbs');
});

test('passing additional props to breadcrumbs', () => {
    render(
        <Breadcrumbs data-test="foo"/>
    );

    const nav = screen.getByRole('navigation');
    expect(nav.dataset.test).toEqual('foo');
});

test('passing additional CSS classes to breadcrumbs', () => {
    render(
        <Breadcrumbs className="foo"/>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('foo');
});

test('breadcrumb item with link', () => {
    render(
        <Breadcrumbs.Item href={LINK_HREF}>{LINK_TEXT}</Breadcrumbs.Item>
    );

    const item = screen.getByRole('listitem');
    const link = within(item).getByRole('link');

    expect(item).toHaveClass('ds_breadcrumbs__item');
    expect(item?.tagName).toEqual('LI');

    expect(link).toHaveClass('ds_breadcrumbs__link');
    expect(link).toHaveAttribute('href', LINK_HREF);
    expect(link?.tagName).toEqual('A');
    expect(link?.textContent).toEqual(LINK_TEXT);
});

test('breadcrumb item without link', () => {
    render(
        <Breadcrumbs.Item>{LINK_TEXT}</Breadcrumbs.Item>
    );

    const item = screen.getByRole('listitem');
    const link = within(item).queryByRole('link');

    expect(item).toHaveClass('ds_breadcrumbs__item');
    expect(item?.tagName).toEqual('LI');
    expect(item?.textContent).toEqual(LINK_TEXT);

    expect(link).not.toBeInTheDocument();
});

test('hidden breadcrumb item', () => {
    render(
        <Breadcrumbs.Item data-testid="Breadcrumbs.Item" isHidden>{LINK_TEXT}</Breadcrumbs.Item>
    );

    const item = screen.getByRole('listitem');
    expect(item).toHaveClass('visually-hidden');
});

test('renders breadcrumb with custom element', () => {
    render(
        <Breadcrumbs.Item href="category" linkComponent={
            ({ className, ...props }) => (
                <span role="link" className={className} {...props}/>
            )}>
            {LINK_TEXT}
        </Breadcrumbs.Item>
    );

    const item = screen.getByRole('listitem');
    const link = within(item).queryByRole('link');

    expect(link?.tagName).toEqual('SPAN');
    expect(link?.textContent).toEqual(LINK_TEXT);
});

test('passing additional props to breadcrumb item', () => {
    render(
        <Breadcrumbs.Item data-test="foo"/>
    );

    const nav = screen.getByRole('listitem');
    expect(nav.dataset.test).toEqual('foo');
});

test('passing additional CSS classes to breadcrumb item', () => {
    render(
        <Breadcrumbs.Item className="foo"/>
    );

    const nav = screen.getByRole('listitem');
    expect(nav).toHaveClass('foo');
});
