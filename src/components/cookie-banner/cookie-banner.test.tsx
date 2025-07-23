/**
 * Most of the functionality for CookieBanner is covered in AbstractNotificationBanner.
 * Differences are specifically tested here.
 */

import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import CookieBanner from './cookie-banner';

const text = 'We need to tell you about something';

/**
 * CookieBanner has additional classNames
 */
test('cookie banner renders correctly', () => {
    render(
        <CookieBanner>
            {text}
        </CookieBanner>
    );

    const bannerContainer = document.querySelector('.ds_notification');

    expect(bannerContainer).toHaveClass('ds_notification', 'ds_notification--large', 'ds_notification--cookie', 'js-initial-cookie-content');
});
