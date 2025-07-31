import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ContentsNav, {Link} from './ContentsNav';

const ITEM_HREF = '#foo';
const ITEM_TITLE = 'My content';

test('contents nav renders correctly', () => {
    const ITEMS = [
        {
            title: 'Apply for Blue Badge',
            current: true
        },
        {
            title: 'Eligibility',
            href: '#2'
        },
        {
            title: 'Using your Blue Badge',
            href: '#3'
        },
        {
            title: 'Report a lost, stolen or misuesd Blue Badge',
            href: '#4'
        },
        {
            title: 'Changing or handing back a Blue Badge',
            href: '#5'
        }
    ];

    const LABEL_TEXT = 'Pages in this guide';

    render(
        <ContentsNav label={LABEL_TEXT} items={ITEMS} />
    )

    const contentsNav = screen.getByRole('navigation');
    const contentsNavTitle = within(contentsNav).getByRole('heading');
    const contentsNavList = within(contentsNav).getByRole('list');

    expect(contentsNav).toHaveClass('ds_contents-nav');
    expect(contentsNav.ariaLabel).toEqual(LABEL_TEXT);
    expect(contentsNav.tagName).toEqual('NAV');
    expect(contentsNavTitle).toHaveClass('ds_contents-nav__title');
    expect(contentsNavTitle.textContent).toEqual('Contents');
    expect(contentsNavList).toHaveClass('ds_contents-nav__list');
    expect(contentsNavList.tagName).toEqual('UL');
    expect(contentsNavList.children.length).toEqual(ITEMS.length);
});

test('contents nav with custom title', () => {
    const TITLE_TEXT = 'My title';

    render(
        <ContentsNav title={TITLE_TEXT} items={[]} />
    );

    const contentsNav = screen.getByRole('navigation');
    const contentsNavTitle = within(contentsNav).getByRole('heading');
    expect(contentsNavTitle.textContent).toEqual(TITLE_TEXT);
});

test('contents nav item', () => {
    render(
        <Link href={ITEM_HREF} title={ITEM_TITLE} />
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByRole('link');

    expect(listItem).toHaveClass('ds_contents-nav__item');
    expect(listItem.tagName).toEqual('LI');
    expect(link).toHaveClass('ds_contents-nav__link');
    expect(link.tagName).toEqual('A');
    expect(link.textContent).toEqual(ITEM_TITLE);
    expect(link).toHaveAttribute('href', ITEM_HREF);
});

test('contents nav current item with href', () => {
    render(
        <Link current href={ITEM_HREF} title={ITEM_TITLE} />
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByText(ITEM_TITLE);

    expect(listItem.ariaCurrent).toEqual('page');
    expect(link.tagName).toEqual('SPAN');
    expect(link).toHaveClass('ds_current');
});

test('contents nav current item without href', () => {
    render(
        <Link current title={ITEM_TITLE} />
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByText(ITEM_TITLE);

    expect(listItem.ariaCurrent).toEqual('page');
    expect(link.tagName).toEqual('SPAN');
    expect(link).toHaveClass('ds_current');
});

test('contents nav item without href', () => {
    render(
        <Link title={ITEM_TITLE} />
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByText(ITEM_TITLE);

    expect(link.tagName).toEqual('SPAN');
    expect(link).not.toHaveClass('ds_current');
});

test('passing additional props', () => {
    render(
        <ContentsNav data-test="foo" items={[
            {
                title: 'Apply for Blue Badge',
            }
        ]} />
    )

    const contentsNav = screen.getByRole('navigation');
    expect(contentsNav?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <ContentsNav className="foo" items={[
            {
                title: 'Apply for Blue Badge',
            }
        ]} />
    )

    const contentsNav = screen.getByRole('navigation');
    expect(contentsNav).toHaveClass('foo', 'ds_contents-nav');
});
