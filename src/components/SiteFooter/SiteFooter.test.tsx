import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SiteFooter from './SiteFooter';

const LINK_HREF = '#cookies';
const LINK_TEXT = 'Cookies';

test('site footer renders correctly', () => {
    render(
        <SiteFooter data-testid="sitefooter">
            <SiteFooter.Links data-testid="sitefooterlinks" />
            <SiteFooter.License data-testid="sitefooterlicense" />
            <SiteFooter.Org data-testid="sitefooterorg" />
        </SiteFooter>
    );

    const siteFooter = screen.getByTestId('sitefooter');
    const siteFooterWrapper = siteFooter.children[0];
    const siteFooterContent = siteFooterWrapper.children[0];

    const siteFooterLinksContainer = screen.getByTestId('sitefooterlinks');
    const siteFooterLicenseContainer = screen.getByTestId('sitefooterlicense');
    const siteFooterOrgContainer = screen.getByTestId('sitefooterorg');

    expect(siteFooter).toHaveClass('ds_site-footer');
    expect(siteFooter.tagName).toEqual('FOOTER');

    expect(siteFooterWrapper).toHaveClass('ds_wrapper');
    expect(siteFooterWrapper.tagName).toEqual('DIV');

    expect(siteFooterContent).toHaveClass('ds_site-footer__content');
    expect(siteFooterContent.tagName).toEqual('DIV');

    expect(siteFooterLinksContainer).toHaveClass('ds_site-footer__site-items');
    expect(siteFooterLinksContainer.tagName).toEqual('UL');

    expect(siteFooterLicenseContainer).toHaveClass('ds_site-footer__copyright');
    expect(siteFooterLicenseContainer.tagName).toEqual('DIV');

    expect(siteFooterOrgContainer).toHaveClass('ds_site-footer__org');
    expect(siteFooterOrgContainer.tagName).toEqual('DIV');
});

test('site footer links render correctly', () => {
    render(
        <SiteFooter.Link href={LINK_HREF}>{LINK_TEXT}</SiteFooter.Link>
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByRole('link');

    expect(listItem).toHaveClass('ds_site-items__item');
    expect(link).toHaveAttribute('href', LINK_HREF);
    expect(link.textContent).toEqual(LINK_TEXT);
});

test('site footer links with custom element render correctly', () => {
    render(
        <SiteFooter.Link href={LINK_HREF} linkComponent={
            ({ className, ...props }) => (
                <span role="link" className={className} {...props}/>
            )}>
            {LINK_TEXT}
        </SiteFooter.Link>
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByRole('link');

    expect(listItem).toHaveClass('ds_site-items__item');
    expect(link).toHaveAttribute('href', LINK_HREF);
    expect(link.textContent).toEqual(LINK_TEXT);
    expect(link.tagName).toEqual('SPAN');
});

test('site footer links with no href render correctly', () => {
    render(
        <SiteFooter.Link>{LINK_TEXT}</SiteFooter.Link>
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).queryByRole('link');

    expect(listItem).toHaveClass('ds_site-items__item');
    expect(listItem.textContent).toEqual(LINK_TEXT);
    expect(link).not.toBeInTheDocument();
});

test('site footer org renders correctly', () => {
    const CHILDREN = 'Foo';

    render(
        <SiteFooter.Org data-testid="sitefooterorg" title="The Scottish Government" href="https://www.gov.scot/">
            {CHILDREN}
        </SiteFooter.Org>
    );

    const siteFooterOrgContainer = screen.getByTestId('sitefooterorg');
    const siteFooterOrgLink = within(siteFooterOrgContainer).getByRole('link');

    expect(siteFooterOrgContainer).toHaveClass('ds_site-footer__org');
    expect(siteFooterOrgContainer.tagName).toEqual('DIV');

    expect(siteFooterOrgLink).toHaveClass('ds_site-footer__org-link');
    expect(siteFooterOrgLink.tagName).toEqual('A');
});

test('site footer org with image renders correctly', () => {
    const CHILDREN = <img src="foo" alt="Foo" />

    render(
        <SiteFooter.Org data-testid="sitefooterorg" title="The Scottish Government" href="https://www.gov.scot/">
            {CHILDREN}
        </SiteFooter.Org>
    );

    const siteFooterOrgContainer = screen.getByTestId('sitefooterorg');
    const siteFooterOrgImage = within(siteFooterOrgContainer).getByRole('img');

    expect(siteFooterOrgImage).toHaveClass('ds_site-footer__org-logo');
});

test('site footer license renders correctly', () => {
    const CHILDREN = 'Hello';

    render(
        <SiteFooter.License data-testid="sitefooterlicense">
            {CHILDREN}
        </SiteFooter.License>
    );

    const siteFooterLicenseContainer = screen.getByTestId('sitefooterlicense');

    expect(siteFooterLicenseContainer.innerHTML).toEqual(CHILDREN);
});

test('passing additional props', () => {
    render(
        <SiteFooter data-testid="sitefooter" data-test="foo" />
    );

    const siteFooter = screen.getByTestId('sitefooter');
    expect(siteFooter?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SiteFooter data-testid="sitefooter" className="foo" />
    );

    const siteFooter = screen.getByTestId('sitefooter');
    expect(siteFooter).toHaveClass('foo');
});
