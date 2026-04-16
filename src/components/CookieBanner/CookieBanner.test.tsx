/**
 * Most of the functionality for CookieBanner is covered in AbstractNotificationBanner.
 * Differences are specifically tested here.
 */

import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CookieBanner from './CookieBanner';
import Button from '../Button/Button';

const BANNER_TEXT = 'We need to tell you about something';

/**
 * CookieBanner has additional classNames
 */
test('cookie banner renders correctly', () => {
    render(
        <CookieBanner>
            {BANNER_TEXT}
            <CookieBanner.Buttons>
                <Button className="js-accept-all-cookies" isSmall buttonStyle="secondary">Accept all cookies</Button>
                <Button className="js-accept-essential-cookies" isSmall buttonStyle="secondary">Use essential cookies only</Button>
                <a href="/cookies/">Set cookie preferences</a>
                </CookieBanner.Buttons>
        </CookieBanner>
    );

    const bannerContainer = document.querySelector('.ds_notification');

    expect(bannerContainer).toHaveClass('ds_notification', 'ds_notification--large', 'ds_notification--cookie', 'js-initial-cookie-content');
});

test('instantiating/initialising DS component script', () => {
    render(
        <CookieBanner data-testid="cookie-banner" >
            {BANNER_TEXT}
            <CookieBanner.Buttons>
                <Button className="js-accept-all-cookies" isSmall buttonStyle="secondary">Accept all cookies</Button>
                <Button className="js-accept-essential-cookies" isSmall buttonStyle="secondary">Use essential cookies only</Button>
                <a href="/cookies/">Set cookie preferences</a>
            </CookieBanner.Buttons>
        </CookieBanner>
    );

    const cookieBanner = screen.getByTestId('cookie-banner');
    expect(cookieBanner).toHaveClass('js-initialised');
    expect(cookieBanner).toHaveClass('js-instantiated');
});
