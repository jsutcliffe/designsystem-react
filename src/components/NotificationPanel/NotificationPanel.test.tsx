import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotificationPanel from './NotificationPanel';

const headingText = 'Thank you';
const text = 'Your Saltire Scholarship Application form has been successfully submitted.';

test('notification banner renders correctly', () => {
    render(
        <NotificationPanel title={headingText}>
            {text}
        </NotificationPanel>
    );

    const notificationPanelHeading = screen.getByRole('heading');
    const notificationPanelContent = notificationPanelHeading.nextElementSibling;
    const notificationPanel = notificationPanelHeading.parentElement;

    expect(notificationPanel).toHaveClass('ds_notification-panel');
    expect(notificationPanelHeading).toHaveClass('ds_notification-panel__title');
    expect(notificationPanelHeading.textContent).toEqual(headingText);
    expect(notificationPanelHeading.tagName).toEqual('H1');
    expect(notificationPanelContent).toHaveClass('ds_notification-panel__content');
    expect(notificationPanelContent?.textContent).toEqual(text);
});

test('notification banner with custom heading level', () => {
    const headerLevel = 'h2';

    render(
        <NotificationPanel headerLevel={headerLevel} title={headingText}>
            {text}
        </NotificationPanel>
    );

    const notificationPanelHeading = screen.getByRole('heading');
    expect(notificationPanelHeading.tagName).toEqual(headerLevel.toUpperCase());
});

test('notification banner with aria-live', () => {
    const ariaLive = 'polite';

    render(
        <NotificationPanel ariaLive={ariaLive} title={headingText}>
            {text}
        </NotificationPanel>
    );

    const notificationPanelHeading = screen.getByRole('heading');
    const notificationPanel = notificationPanelHeading.parentElement;

    expect(notificationPanel).toHaveAttribute('aria-live', ariaLive);
});

test('notification banner with nonsense heading level reverts to H1', () => {
    const headerLevel = 'h2';
    render(
        <NotificationPanel headerLevel={headerLevel} title={headingText}>
            {text}
        </NotificationPanel>
    );

    const notificationPanelHeading = screen.getByRole('heading');
    expect(notificationPanelHeading.tagName).toEqual(headerLevel.toUpperCase());
});

test('passing additional props', () => {
    render(
        <NotificationPanel title={headingText} data-test="foo">
            {text}
        </NotificationPanel>
    )

    const notificationPanelHeading = screen.getByRole('heading');
    const notificationPanel = notificationPanelHeading.parentElement;
    expect(notificationPanel?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <NotificationPanel title={headingText} className="foo">
            {text}
        </NotificationPanel>
    )

    const notificationPanelHeading = screen.getByRole('heading');
    const notificationPanel = notificationPanelHeading.parentElement;
    expect(notificationPanel).toHaveClass('foo', 'ds_notification-panel');
});
