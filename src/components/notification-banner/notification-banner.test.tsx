import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import NotificationBanner from './notification-banner';

const text = 'We need to tell you about something';

test('notification banner renders correctly', () => {
    render(
        <NotificationBanner>
            {text}
        </NotificationBanner>
    );

    const bannerTitle = screen.getByRole('heading');
    const bannerText = bannerTitle.nextSibling;
    const bannerContent = bannerTitle.parentNode;
    const bannerWrapper = bannerContent?.parentNode;
    const bannerContainer = bannerWrapper?.parentNode;

    expect(bannerTitle.textContent).toEqual('Information');
    expect(bannerTitle.tagName).toEqual('H2');
    expect(bannerTitle).toHaveClass('visually-hidden');

    expect(bannerText).toHaveClass('ds_notification__text');
    expect(bannerText.textContent).toEqual(text);

    expect(bannerContent).toHaveClass('ds_notification__content');
    expect(bannerWrapper).toHaveClass('ds_wrapper');
    expect(bannerContainer).toHaveClass('ds_notification', 'ds_reversed');
});

test('notification banner with close button', () => {
    render(
        <NotificationBanner close>
            {text}
        </NotificationBanner>
    );

    const bannerTitle = screen.getByRole('heading');
    const bannerContent = bannerTitle.parentNode;
    const closeButton = screen.getByRole('button');
    const closeButtonLabel = within(closeButton).getByText('Close this notification');
    const closeButtonIcon = within(closeButton).getByRole('img', { hidden: true });

    expect(bannerContent).toHaveClass('ds_notification__content--has-close');
    expect(closeButton).toHaveClass('ds_notification__close', 'js-close-notification');
    expect(closeButton).toHaveAttribute('type', 'button');

    expect(closeButtonLabel).toBeInTheDocument();
    expect(closeButtonLabel).toHaveClass('visually-hidden');

    expect(closeButtonIcon).toHaveClass('ds_icon', 'ds_icon--fill');
});

test('notification banner with icon', () => {
    render(
        <NotificationBanner icon>
            {text}
        </NotificationBanner>
    );

    const bannerTitle = screen.getByRole('heading');
    const bannerIconContainer = bannerTitle.nextSibling;
    const bannerIcon = within(bannerIconContainer).getByRole('img', { hidden: true });

    expect(bannerIconContainer).toHaveClass('ds_notification__icon');
    expect(bannerIcon).toHaveClass('ds_icon');
    expect(bannerIcon).toHaveAttribute('aria-hidden');
});

test('notification banner with icon modifier classes', () => {
    render(
        <NotificationBanner icon iconColour iconInverse>
            {text}
        </NotificationBanner>
    );

    const bannerTitle = screen.getByRole('heading');
    const bannerIconContainer = bannerTitle.nextSibling;

    expect(bannerIconContainer).toHaveClass('ds_notification__icon', 'ds_notification__icon--inverse', 'ds_notification__icon--colour');
});

test('passing additional props', () => {
    render(
        <NotificationBanner data-test="foo">
            {text}
        </NotificationBanner>
    )

    const bannerContainer = document.querySelector('.ds_notification');
    expect(bannerContainer?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <NotificationBanner className="foo">
            {text}
        </NotificationBanner>
    )

    const bannerContainer = document.querySelector('.ds_notification');
    expect(bannerContainer).toHaveClass('foo', 'ds_notification');
});
