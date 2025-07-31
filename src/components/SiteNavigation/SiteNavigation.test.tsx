import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SiteNavigation from './SiteNavigation';

const ITEMS = [
    {title: 'About', href: '#about'},
    {title: 'Get started', href: '#get-started'},
    {title: 'Styles', href: '#styles'},
    {title: 'Components', href: '#components'},
    {title: 'Patterns', href: '#patterns'},
    {title: 'Guidance', href: '#guidance'},
]

test('renders correctly', () => {
    render(
        <SiteNavigation items={ITEMS}/>
    );

    const nav = screen.getByRole('navigation');
    const list = within(nav).getByRole('list');
    const listItems = within(list).getAllByRole('listitem');

    // check nav
    expect(nav).toHaveClass('ds_site-navigation');
    expect(nav.tagName).toEqual('NAV');

    // check list
    expect(list.tagName).toEqual('UL');
    expect(list).toHaveClass('ds_site-navigation__list');

    // check items
    expect(listItems.length).toEqual(ITEMS.length);

    listItems.forEach((item, index) => {
        expect(item).toHaveClass('ds_site-navigation__item');

        const link = within(item).getByRole('link');

        expect(link).toHaveClass('ds_site-navigation__link');
        expect(link).not.toHaveClass('ds_current');
        expect(link.textContent).toEqual(ITEMS[index].title);
        expect(link).toHaveAttribute('href', ITEMS[index].href)
    });
});

test('highlights current item', () => {
    render(
        <SiteNavigation data-test="foo" items={[{title: 'About', href: '#about', current: true}]}/>
    );

    const link = screen.getByRole('link');

    expect(link).toHaveClass('ds_current');
});

test('passing additional props', () => {
    render(
        <SiteNavigation data-test="foo" items={ITEMS}/>
    );

    const nav = screen.getByRole('navigation');
    expect(nav.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SiteNavigation className="foo" items={ITEMS}/>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('foo', 'ds_site-navigation');
});
