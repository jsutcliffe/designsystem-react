import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';

const items = [
    { href: 'home', title: 'Home' },
    { href: 'category', title: 'Category' },
    { title: 'Page' }
];

test('renders correctly', () => {
    render(
        <Breadcrumbs items={items} />
    );

    const nav = screen.getByRole('navigation');
    const list = within(nav).getByRole('list');
    const listItems = within(list).getAllByRole('listitem');

    // check nav
    expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');

    // check list
    expect(list.tagName).toEqual('OL');
    expect(list).toHaveClass('ds_breadcrumbs');

    // check items
    expect(listItems.length).toEqual(items.length);

    listItems.forEach((item, index) => {
        expect(item).toHaveClass('ds_breadcrumbs__item');

        const link = within(item).queryByRole('link');

        if (index + 1 < listItems.length) {
            expect(link).toBeDefined();
            expect(link).toHaveClass('ds_breadcrumbs__link');
        } else {
            expect(link).toBeNull();
        }
    });

    // check href matches correct item
    const categoryLink = within(list).getByRole('link', { name: 'Category' });
    expect(categoryLink).toHaveAttribute('href', 'category');
});

test('renders with last item hidden', () => {
    render(
        <Breadcrumbs
            hideLastItem
            items={items}
        />
    );

    // check still 3 items
    const list = screen.getByRole('list');
    const listItems = within(list).getAllByRole('listitem');
    expect(listItems.length).toEqual(3);

    // check last item is hidden
    const pageCrumb = within(list).getByText('Page');
    expect(pageCrumb).toHaveClass('visually-hidden');
    expect(pageCrumb.tagName).toEqual('LI');
});

test('passing additional props', () => {
    render(
        <Breadcrumbs
            items={items}
            data-test="foo"
        />
    );

    const nav = screen.getByRole('navigation');
    expect(nav.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Breadcrumbs
            items={items}
            className="foo"
        />
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('foo');
});
