import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SequentialNavigation from './sequential-navigation';

const nextLinkObj = { title: 'Apply for or renew a Blue Badge?', href: '#prev' }
const prevLinkObj = { title: 'Apply for or renew a Blue Badge?', href: '#prev' }

test('sequential navigation renders correctly', () => {
    render(
        <SequentialNavigation
            next={nextLinkObj}
            previous={prevLinkObj}
        />
    );

    const sequentialNavigation = screen.getByRole('navigation');
    const prevLink = screen.getAllByRole('link')[0];
    const prevLinkWrapper = prevLink.parentElement;
    const nextLink = screen.getAllByRole('link')[1];
    const nextLinkWrapper = nextLink.parentElement;

    expect(sequentialNavigation).toHaveClass('ds_sequential-nav');
    expect(sequentialNavigation).toHaveAttribute('aria-label', 'Article navigation');

    expect(prevLink).toHaveClass('ds_sequential-nav__button', 'ds_sequential-nav__button--left');
    expect(prevLink).toHaveAttribute('href', prevLinkObj.href);
    expect(prevLink.textContent).toEqual(prevLinkObj.title);
    expect(prevLinkWrapper).toHaveClass('ds_sequential-nav__item', 'ds_sequential-nav__item--prev');
    expect(prevLinkWrapper?.tagName).toEqual('DIV');
    expect(prevLink.childNodes[0]).toHaveAttribute('data-label', 'Previous')

    expect(nextLink).toHaveClass('ds_sequential-nav__button', 'ds_sequential-nav__button--right');
    expect(nextLink).toHaveAttribute('href', nextLinkObj.href);
    expect(nextLink.textContent).toEqual(nextLinkObj.title);
    expect(nextLinkWrapper).toHaveClass('ds_sequential-nav__item', 'ds_sequential-nav__item--next');
    expect(nextLinkWrapper?.tagName).toEqual('DIV');
    expect(nextLink.childNodes[0]).toHaveAttribute('data-label', 'Next')
});

test('with custom aria label', () => {
    const ariaLabel = 'My label';

    render(
        <SequentialNavigation
            ariaLabel={ariaLabel}
            next={nextLinkObj}
            previous={prevLinkObj}
        />
    );

    const sequentialNavigation = screen.getByRole('navigation');

    expect(sequentialNavigation).toHaveAttribute('aria-label', ariaLabel);
});

test('passing additional props', () => {
    render(
        <SequentialNavigation
            data-test="foo"
            next={nextLinkObj}
            previous={prevLinkObj}
        />
    );

    const sequentialNavigation = screen.getByRole('navigation');
    expect(sequentialNavigation?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SequentialNavigation
            className="foo"
            next={nextLinkObj}
            previous={prevLinkObj}
        />
    );

    const sequentialNavigation = screen.getByRole('navigation');
    expect(sequentialNavigation).toHaveClass('foo', 'ds_sequential-nav');
});
