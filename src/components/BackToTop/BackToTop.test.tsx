import { test, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import BackToTop from './BackToTop';

// Mock the ResizeObserver
class ResizeObserverMock {
    constructor() {}
    observe() { return vi.fn() }
    unobserve() { return vi.fn() }
    disconnect() { return vi.fn() }
};
vi.stubGlobal('ResizeObserver', ResizeObserverMock);

test('back to top renders correctly', () => {
    render(
        <BackToTop data-test="foo" />
    );

    const button = screen.getByRole('link');
    const container = button.parentElement;
    const icon = within(button).getByRole('img', {hidden: true});

    // check button
    expect(button).toHaveClass('ds_back-to-top__button');
    expect(button).toHaveAttribute('href', '#page-top');
    expect(button.tagName).toEqual('A');

    // check container
    expect(container).toHaveClass('ds_back-to-top');

    // check icon
    expect(icon).toHaveClass('ds_icon', 'ds_back-to-top__icon');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
});

test('renders with custom href', () => {
    render(
        <BackToTop href="#foo" />
    );

    // check href
    const button = screen.getByRole('link');
    expect(button).toHaveAttribute('href', '#foo');
});

test('passing additional props', () => {
    render(
        <BackToTop data-test="foo" />
    );

    const button = screen.getByRole('link');
    const container = button.parentElement;
    expect(container?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <BackToTop className="foo" />
    );

    const button = screen.getByRole('link');
    const container = button.parentElement;
    expect(container).toHaveClass('foo');
});
