/**
 * Most of the functionality for CookieBanner is covered in AbstractNotificationBanner.
 * Differences are specifically tested here.
 */

import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import CookieBanner from './CookieBanner';

const BANNER_TEXT = 'We need to tell you about something';

/**
 * CookieBanner has additional classNames
 */
test('cookie banner renders correctly', () => {
    render(
        <CookieBanner>
            {BANNER_TEXT}
        </CookieBanner>
    );

    const bannerContainer = document.querySelector('.ds_notification');

    expect(bannerContainer).toHaveClass('ds_notification', 'ds_notification--large', 'ds_notification--cookie', 'js-initial-cookie-content');
});
