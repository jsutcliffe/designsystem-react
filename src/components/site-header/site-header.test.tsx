import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SiteHeader from './site-header';
import SiteNavigation from '../site-navigation/site-navigation';
import SiteSearch from '../site-search/site-search';
import PhaseBanner from '../phase-banner/phase-banner';

test('site header renders correctly (maximal, testing markup structure)', () => {
    render(
        <SiteHeader
            logo={{
                alt: 'The Scottish Government',
                src: './scottish-government.svg'
            }}
            navigationItems={[
                { title: 'About', href: '#about' },
                { title: 'Get started', href: '#get-started' },
                { title: 'Styles', href: '#styles' },
                { title: 'Components', href: '#components' },
                { title: 'Patterns', href: '#patterns' },
                { title: 'Guidance', href: '#guidance' },
            ]}
            phaseBanner={{
                phaseName: 'Beta'
            }}
            siteSearch
            siteTitle="Design System React"
        />
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderContent = siteHeader.querySelector('.ds_site-header__content');
    const siteHeaderContentWrapper = siteHeaderContent?.parentElement;
    const siteHeaderBranding = siteHeader.querySelector('.ds_site-branding');
    const siteHeaderControls = siteHeader.querySelector('.ds_site-header__controls');
    const siteHeaderNavToggle = siteHeader.querySelector('.ds_site-navigation__toggle');
    const siteHeaderNavigationMobile = within(siteHeader).getAllByRole('navigation')[0];
    const siteHeaderNavigationDesktop = within(siteHeader).getAllByRole('navigation')[1];
    const siteHeaderPhaseBanner = siteHeader.querySelector('.ds_phase-banner');
    const siteHeaderSearch = within(siteHeader).getByRole('search').parentNode;

    expect(siteHeader).toHaveClass('ds_site-header');
    expect(siteHeaderContentWrapper).toHaveClass('ds_wrapper');

    expect(siteHeaderBranding?.parentNode).toEqual(siteHeaderContent);
    expect(siteHeaderControls?.parentNode).toEqual(siteHeaderContent);
    expect(siteHeaderNavToggle?.parentNode).toEqual(siteHeaderContent);
    expect(siteHeaderNavigationMobile.parentNode).toEqual(siteHeaderContent);
    expect(siteHeaderSearch?.parentNode).toEqual(siteHeaderContent);

    expect(siteHeaderBranding?.previousSibling).toBeNull();
    expect(siteHeaderControls?.previousSibling).toEqual(siteHeaderBranding);
    expect(siteHeaderNavToggle?.previousSibling).toEqual(siteHeaderControls);
    expect(siteHeaderNavigationMobile.previousSibling).toEqual(siteHeaderNavToggle);
    expect(siteHeaderSearch?.previousSibling).toEqual(siteHeaderNavigationMobile);

    expect(siteHeaderNavigationDesktop.parentNode).toHaveClass('ds_wrapper');
    expect(siteHeaderNavigationDesktop?.parentNode?.parentNode).toHaveClass('ds_site-header__navigation');

    expect(siteHeaderNavigationDesktop?.parentNode?.parentNode?.previousSibling).toEqual(siteHeaderPhaseBanner);

    expect(siteHeaderPhaseBanner?.previousSibling).toEqual(siteHeaderContentWrapper);

    expect(siteHeaderPhaseBanner?.parentNode).toEqual(siteHeader);
    expect(siteHeaderNavigationDesktop?.parentNode?.parentNode?.parentNode).toEqual(siteHeader);
    expect(siteHeaderContentWrapper?.parentNode).toEqual(siteHeader);
});

test('site header branding: logo only, default URL', () => {
    const logo = {
        alt: 'The Scottish Government',
        src: './scottish-government.svg'
    };

    render(
        <SiteHeader
            logo={logo}
        />
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderBranding = siteHeader.querySelector('.ds_site-branding');
    const siteHeaderLogoLink = within(siteHeader).getByRole('link');
    const siteHeaderLogoImg = within(siteHeader).getByRole('img');

    expect(siteHeaderLogoLink).toHaveClass('ds_site-branding__logo', 'ds_site-branding__link');
    expect(siteHeaderLogoLink).toHaveAttribute('href', '/');

    expect(siteHeaderLogoImg).toHaveClass('ds_site-branding__logo-image');
    expect(siteHeaderLogoImg).toHaveAttribute('src', logo.src);
    expect(siteHeaderLogoImg).toHaveAttribute('alt', logo.alt);

    expect(siteHeaderLogoImg.parentNode).toEqual(siteHeaderLogoLink);
    expect(siteHeaderLogoLink.parentNode).toEqual(siteHeaderBranding);
});

test('site header branding: logo and site title', () => {
    const logo = {
        alt: 'The Scottish Government',
        src: './scottish-government.svg'
    };
    const siteTitleContent = 'Design System React';

    render(
        <SiteHeader
            logo={logo}
            siteTitle={siteTitleContent}
        />
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderBranding = siteHeader.querySelector('.ds_site-branding');
    const siteHeaderLogoLink = within(siteHeader).getByRole('link');
    const siteTitle = siteHeader.querySelector('.ds_site-branding__title');

    expect(siteTitle?.tagName).toEqual('DIV');
    expect(siteTitle?.textContent).toEqual(siteTitleContent);
    expect(siteTitle?.parentNode).toEqual(siteHeaderBranding);
    expect(siteTitle?.previousSibling).toEqual(siteHeaderLogoLink);
});

test('site header branding: custom link URL', () => {
    const logo = {
        alt: 'The Scottish Government',
        href: '/home.aspx',
        src: './scottish-government.svg'
    };

    render(
        <SiteHeader
            logo={logo}
        />
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderLogoLink = within(siteHeader).getByRole('link');

    expect(siteHeaderLogoLink).toHaveAttribute('href', logo.href);
});

test('site header with site search', () => {
    const searchProps = {
        action: 'apple',
        autocompleteEndpoint: 'banana',
        autocompleteSuggestionMappingFunction: 'cucumber',
        className: 'durian',
        id: 'eggplant',
        method: 'POST',
        name: 'guava',
        placeholder: 'haw'
    };

    render(
        <>
            <SiteHeader siteSearch={searchProps} />
            <SiteSearch data-testid="sitesearch" {...searchProps} />
        </>
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderSearch = within(siteHeader).getByRole('search')
    const siteSearchReference = screen.getByTestId('sitesearch');

    expect(siteHeaderSearch.outerHTML).toEqual(siteSearchReference.innerHTML);
});

test('site header with site navigation', () => {
    const navigationItems = [
        { title: 'About', href: '#about' },
        { title: 'Get started', href: '#get-started' },
        { title: 'Styles', href: '#styles' },
        { title: 'Components', href: '#components' },
        { title: 'Patterns', href: '#patterns' },
        { title: 'Guidance', href: '#guidance' },
    ];

    render(
        <>
            <SiteHeader navigationItems={navigationItems} />
            <SiteNavigation data-testid="sitenavigation" items={navigationItems} />
        </>
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderNavigationMobile = within(siteHeader).getAllByRole('navigation')[0];
    const siteHeaderNavigationDesktop = within(siteHeader).getAllByRole('navigation')[1];
    const siteNavigationReference = screen.getByTestId('sitenavigation');
    const siteNavControl = within(siteHeader).getByRole('checkbox');
    const siteNavControlLabel = document.querySelector(`[for="${siteNavControl.id}"]`);
    const siteNavControls = siteNavControlLabel?.parentElement;

    expect(siteHeaderNavigationMobile).toHaveClass('ds_site-navigation', 'ds_site-navigation--mobile');
    expect(siteHeaderNavigationMobile).toHaveAttribute('id', 'mobile-navigation');

    expect(siteHeaderNavigationDesktop).toHaveClass('ds_site-navigation');
    expect(siteHeaderNavigationDesktop).not.toHaveAttribute('id', 'mobile-navigation');

    expect(siteHeaderNavigationMobile.innerHTML).toEqual(siteNavigationReference.innerHTML);
    expect(siteHeaderNavigationDesktop.innerHTML).toEqual(siteNavigationReference.innerHTML);

    expect(siteNavControl).toHaveClass('ds_site-navigation__toggle');
    expect(siteNavControl).toHaveAttribute('id', 'menu');

    expect(siteNavControlLabel).toHaveClass('ds_site-header__control', 'js-toggle-menu');
    expect(siteNavControlLabel).toHaveAttribute('aria-controls', siteHeaderNavigationMobile.id);
    expect(siteNavControlLabel?.textContent).toEqual('Menu');
    expect(siteNavControlLabel?.tagName).toEqual('LABEL');
    // todo: check for icons and structure

    expect(siteNavControls).toHaveClass('ds_site-header__controls');
    expect(siteNavControls?.tagName).toEqual('DIV');
});

test('site header with phase banner', () => {
    const phaseBannerProps = {
        content: 'My content',
        phaseName: 'Beta'
    };

    render(
        <>
            <SiteHeader phaseBanner={phaseBannerProps} />
            <PhaseBanner data-testid="phasebanner" {...phaseBannerProps} />
        </>
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderPhaseBanner = siteHeader.querySelector('.ds_phase-banner');
    const phaseBannerReference = screen.getByTestId('phasebanner');

    expect(siteHeaderPhaseBanner?.tagName).toEqual('DIV');
    expect(siteHeaderPhaseBanner?.innerHTML).toEqual(phaseBannerReference.innerHTML);
});

test('passing additional props', () => {
    render(
        <SiteHeader data-test="foo" />
    );

    const siteHeader = screen.getByRole('banner');
    expect(siteHeader?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SiteHeader className="foo" />
    );

    const siteHeader = screen.getByRole('banner');
    expect(siteHeader).toHaveClass('foo');
});
