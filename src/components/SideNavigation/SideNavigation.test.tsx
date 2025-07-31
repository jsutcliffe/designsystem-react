import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SideNavigation, { List, Link } from './SideNavigation';

const ITEMS = [
    {
        title: 'Apples',
        href: '#apples',
        items: [
            {
                title: 'Green apples',
                href: '#green-apples',
                items: [
                    {
                        title: 'Bramley',
                        current: true
                    },
                    {
                        title: 'Granny Smith',
                        href: '#granny-smith'
                    }
                ]
            },
            {
                title: 'Red apples',
                href: '#red-apples'
            }
        ]
    },
    {
        title: 'Bananas',
        href: '#bananas'
    },
    {
        title: 'Cherries',
        href: '#cherries'
    },
    {
        title: 'Dates',
        href: '#dates'
    }
];

test('side navigation renders correctly', () => {
    render(
        <SideNavigation items={ITEMS} />
    );

    const sideNavigation = screen.getByRole('navigation');
    const toggle = within(sideNavigation).getByRole('checkbox');
    const label = document.querySelector('.ds_side-navigation__expand');
    const rootList = within(sideNavigation).getAllByRole('list')[0];

    expect(sideNavigation).toHaveClass('ds_side-navigation');
    expect(sideNavigation).toHaveAttribute('aria-label', 'Sections');

    expect(toggle).toHaveClass('fully-hidden', 'js-toggle-side-navigation');
    expect(toggle).toHaveAttribute('id', 'show-side-navigation');
    expect(toggle).toHaveAttribute('aria-controls', 'side-navigation-root');

    expect(label).toHaveClass('ds_link');
    expect(label).toHaveAttribute('for', toggle.id);
    expect(label?.textContent).toEqual('Show all Pages in this section');

    expect(rootList).toHaveAttribute('id', 'side-navigation-root');

    // some specifics of this case
    expect(rootList.children.length).toEqual(4);
    expect(document.querySelectorAll('.ds_side-navigation__link').length).toEqual(8);
    expect(document.querySelectorAll('.ds_side-navigation__list').length).toEqual(3);
});

test('side nav link renders correctly', () => {
    render(
        <Link title="Green apples" href="#green-apples" />
    );

    const item = screen.getByRole('listitem');
    const link = within(item).getByRole('link');

    expect(item).toHaveClass('ds_side-navigation__item');

    expect(link).toHaveClass('ds_side-navigation__link');
    expect(link).toHaveAttribute('href', '#green-apples');
    expect(link.textContent).toEqual('Green apples');
});

test('current side nav item without link renders correctly', () => {
    render(
        <Link title="Green apples" href="#green-apples" current />
    );

    const item = screen.getByRole('listitem');
    const span = within(item).getByText('Green apples');

    expect(span).toHaveClass('ds_side-navigation__link', 'ds_current');
    expect(span.tagName).toEqual('SPAN');
});

test('side nav link with children', () => {
    render(
        <Link title="Green apples" href="#green-apples" items={[{
            title: 'Bramley',
            href: '#bramley'
        },
        {
            title: 'Granny Smith',
            href: '#granny-smith'
        }]} />
    );

    const childList = screen.getByRole('list');
    const childItem = screen.getAllByRole('listitem')[1];
    const childLink = within(childItem).getByRole('link');

    expect(childList).toHaveClass('ds_side-navigation__list');
    expect(childList.children.length).toEqual(2);

    // check properties of first child link
    expect(childItem).toHaveClass('ds_side-navigation__item');
    expect(childLink).toHaveClass('ds_side-navigation__link');
    expect(childLink).toHaveAttribute('href', '#bramley');
    expect(childLink.textContent).toEqual('Bramley');
});

test('side nav list renders correctly', () => {
    const ITEMS = [
        {
            title: 'Bramley',
            href: '#bramley'
        },
        {
            title: 'Granny Smith',
            href: '#granny-smith'
        }
    ];

    render(
        <List items={ITEMS}/>
    );

    const list = screen.getByRole('list');
    const item = screen.getAllByRole('listitem')[0];
    const link = within(item).getByRole('link');

    expect(list).toHaveClass('ds_side-navigation__list');
    expect(list.tagName).toEqual('UL');

    expect(list.children.length).toEqual(ITEMS.length);

    // check properties of first link
    expect(item).toHaveClass('ds_side-navigation__item');
    expect(link).toHaveClass('ds_side-navigation__link');
    expect(link).toHaveAttribute('href', '#bramley');
    expect(link.textContent).toEqual('Bramley');
});

test('passing additional props', () => {
    render(
        <SideNavigation data-test="foo" items={ITEMS} />
    );

    const sideNavigation = screen.getByRole('navigation');
    expect(sideNavigation?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SideNavigation className="foo" items={ITEMS} />
    );

    const sideNavigation = screen.getByRole('navigation');
    expect(sideNavigation).toHaveClass('foo', 'ds_side-navigation');
});
