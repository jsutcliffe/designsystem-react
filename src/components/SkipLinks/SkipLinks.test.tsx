import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SkipLinks from './SkipLinks';

const MAIN_CONTENT_ID = 'main-content';
const LINK_TEXT = 'Skip to main content';

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
    expect(skipLinksLink).toHaveAttribute('href', `#${MAIN_CONTENT_ID}`);
    expect(skipLinksLink.textContent).toEqual(LINK_TEXT);
});

test('custom link text', () => {
    const MAIN_LINK_TEXT = 'foo';

    render(
        <SkipLinks mainLinkText={MAIN_LINK_TEXT} />
    );

    const skipLinksList = screen.getByRole('list');
    const skipLinksLink = within(skipLinksList).getByRole('link');

    expect(skipLinksLink.textContent).toEqual(MAIN_LINK_TEXT);
});

test('custom link target', () => {
    const CUSTOM_ID = 'bar'

    render(
        <SkipLinks mainContentId={CUSTOM_ID} />
    );

    const skipLinksList = screen.getByRole('list');
    const skipLinksLink = within(skipLinksList).getByRole('link');

    expect(skipLinksLink).toHaveAttribute('href', `#${CUSTOM_ID}`)
});

test('explicit links', () => {
    const LINK_ID = 'foo';
    const LINK_TEXT = 'bar';

    render(
        <SkipLinks>
            <SkipLinks.Link fragmentId={LINK_ID}>{LINK_TEXT}</SkipLinks.Link>
        </SkipLinks>
    );

    const skipLinksList = screen.getByRole('list');
    const skipLinksListItems = within(skipLinksList).getAllByRole('listitem');
    const skipLinksSecondLink = within(skipLinksList).getByRole('link');

    expect(skipLinksListItems.length).toEqual(1);
    expect(skipLinksSecondLink).toHaveAttribute('href', `#${LINK_ID}`);
    expect(skipLinksSecondLink.textContent).toEqual(LINK_TEXT);
});

test('static skip links', () => {
    render(
        <SkipLinks isStatic />
    );

    const skipLinksList = screen.getByRole('list');
    const skipLinksContainer = skipLinksList.parentElement;

    expect(skipLinksContainer).toHaveClass('ds_skip-links--static');
});

test('passing additional props', () => {
    render(
        <SkipLinks data-test="foo" />
    );

    const skipLinksList = screen.getByRole('list');
    const skipLinksContainer = skipLinksList.parentElement;

    expect(skipLinksContainer?.dataset.test).toEqual('foo');
});
