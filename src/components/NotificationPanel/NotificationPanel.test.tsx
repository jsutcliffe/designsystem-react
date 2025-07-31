import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotificationPanel from './NotificationPanel';

const HEADING_TEXT = 'Thank you';
const TEXT = 'Your Saltire Scholarship Application form has been successfully submitted.';

test('notification banner renders correctly', () => {
    render(
        <NotificationPanel title={HEADING_TEXT}>
            {TEXT}
        </NotificationPanel>
    );

    const notificationPanelHeading = screen.getByRole('heading');
    const notificationPanelContent = notificationPanelHeading.nextElementSibling;
    const notificationPanel = notificationPanelHeading.parentElement;

    expect(notificationPanel).toHaveClass('ds_notification-panel');
    expect(notificationPanelHeading).toHaveClass('ds_notification-panel__title');
    expect(notificationPanelHeading.textContent).toEqual(HEADING_TEXT);
    expect(notificationPanelHeading.tagName).toEqual('H1');
    expect(notificationPanelContent).toHaveClass('ds_notification-panel__content');
    expect(notificationPanelContent?.textContent).toEqual(TEXT);
});

test('notification banner with custom heading level', () => {
    const HEADING_LEVEL = 'h2';

    render(
        <NotificationPanel headingLevel={HEADING_LEVEL} title={HEADING_TEXT}>
            {TEXT}
        </NotificationPanel>
    );

    const notificationPanelHeading = screen.getByRole('heading');
    expect(notificationPanelHeading.tagName).toEqual(HEADING_LEVEL.toUpperCase());
});

test('notification banner with aria-live', () => {
    const ARIA_LIVE = 'polite';

    render(
        <NotificationPanel ariaLive={ARIA_LIVE} title={HEADING_TEXT}>
            {TEXT}
        </NotificationPanel>
    );

    const notificationPanelHeading = screen.getByRole('heading');
    const notificationPanel = notificationPanelHeading.parentElement;

    expect(notificationPanel).toHaveAttribute('aria-live', ARIA_LIVE);
});

test('notification banner with nonsense heading level reverts to H1', () => {
    const HEADING_LEVEL = 'h2';

    render(
        <NotificationPanel headingLevel={HEADING_LEVEL} title={HEADING_TEXT}>
            {TEXT}
        </NotificationPanel>
    );

    const notificationPanelHeading = screen.getByRole('heading');
    expect(notificationPanelHeading.tagName).toEqual(HEADING_LEVEL.toUpperCase());
});

test('passing additional props', () => {
    render(
        <NotificationPanel title={HEADING_TEXT} data-test="foo">
            {TEXT}
        </NotificationPanel>
    )

    const notificationPanelHeading = screen.getByRole('heading');
    const notificationPanel = notificationPanelHeading.parentElement;
    expect(notificationPanel?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <NotificationPanel title={HEADING_TEXT} className="foo">
            {TEXT}
        </NotificationPanel>
    )

    const notificationPanelHeading = screen.getByRole('heading');
    const notificationPanel = notificationPanelHeading.parentElement;
    expect(notificationPanel).toHaveClass('foo', 'ds_notification-panel');
});
