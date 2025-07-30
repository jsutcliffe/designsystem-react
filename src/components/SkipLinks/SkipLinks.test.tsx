import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SkipLinks from './SkipLinks';

const mainContentId = 'main-content';
const linkText = 'Skip to main content';

test('skip links renders correctly', () => {
    render(
        <SkipLinks />
    );

    const skipLinksList = screen.getByRole('list');
    const skipLinksContainer = skipLinksList.parentElement;
    const skipLinksListItem = within(skipLinksList).getByRole('listitem');
    const skipLinksLink = within(skipLinksList).getByRole('link');

    expect(skipLinksContainer).toHaveClass('ds_skip-links');
    expect(skipLinksContainer?.tagName).toEqual('DIV');

    expect(skipLinksList).toHaveClass('ds_skip-links__list');
    expect(skipLinksList.tagName).toEqual('UL');

    expect(skipLinksListItem).toHaveClass('ds_skip-links__item');

    expect(skipLinksLink).toHaveClass('ds_skip-links__link');
    expect(skipLinksLink).toHaveAttribute('href', `#${mainContentId}`);
    expect(skipLinksLink.textContent).toEqual(linkText);
});

test('custom link text', () => {
    const mainLinkText = 'foo';

    render(
        <SkipLinks mainLinkText={mainLinkText} />
    );

    const skipLinksList = screen.getByRole('list');
    const skipLinksLink = within(skipLinksList).getByRole('link');

    expect(skipLinksLink.textContent).toEqual(mainLinkText);
});

test('custom link target', () => {
    const customId = 'bar'

    render(
        <SkipLinks mainContentId={customId} />
    );

    const skipLinksList = screen.getByRole('list');
    const skipLinksLink = within(skipLinksList).getByRole('link');

    expect(skipLinksLink).toHaveAttribute('href', `#${customId}`)
});

test('additional links', () => {
    const items = [
        { title: 'foo', targetId: 'bar' }
    ];

    render(
        <SkipLinks items={items} />
    );

    const skipLinksList = screen.getByRole('list');
    const skipLinksListItems = within(skipLinksList).getAllByRole('listitem');
    const skipLinksSecondLink = within(skipLinksList).getAllByRole('link')[1];

    expect(skipLinksListItems.length).toEqual(2);
    expect(skipLinksSecondLink).toHaveAttribute('href', `#${items[0].targetId}`);
    expect(skipLinksSecondLink.textContent).toEqual(items[0].title);
})

test('passing additional props', () => {
    render(
        <SkipLinks data-test="foo" />
    );

    const skipLinksList = screen.getByRole('list');
    const skipLinksContainer = skipLinksList.parentElement;

    expect(skipLinksContainer?.dataset.test).toEqual('foo');
});
