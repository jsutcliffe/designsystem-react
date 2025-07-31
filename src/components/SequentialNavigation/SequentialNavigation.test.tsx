import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SequentialNavigation from './SequentialNavigation';

const NEXT_LINK_OBJECT = { title: 'Apply for or renew a Blue Badge?', href: '#prev' }
const PREVIOUS_LINK_OBJECT = { title: 'Apply for or renew a Blue Badge?', href: '#prev' }

test('sequential navigation renders correctly', () => {
    render(
        <SequentialNavigation
            next={NEXT_LINK_OBJECT}
            previous={PREVIOUS_LINK_OBJECT}
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
    expect(prevLink).toHaveAttribute('href', PREVIOUS_LINK_OBJECT.href);
    expect(prevLink.textContent).toEqual(PREVIOUS_LINK_OBJECT.title);
    expect(prevLinkWrapper).toHaveClass('ds_sequential-nav__item', 'ds_sequential-nav__item--prev');
    expect(prevLinkWrapper?.tagName).toEqual('DIV');
    expect(prevLink.childNodes[0]).toHaveAttribute('data-label', 'Previous')

    expect(nextLink).toHaveClass('ds_sequential-nav__button', 'ds_sequential-nav__button--right');
    expect(nextLink).toHaveAttribute('href', NEXT_LINK_OBJECT.href);
    expect(nextLink.textContent).toEqual(NEXT_LINK_OBJECT.title);
    expect(nextLinkWrapper).toHaveClass('ds_sequential-nav__item', 'ds_sequential-nav__item--next');
    expect(nextLinkWrapper?.tagName).toEqual('DIV');
    expect(nextLink.childNodes[0]).toHaveAttribute('data-label', 'Next')
});

test('with custom aria label', () => {
    const ARIA_LABEL = 'My label';

    render(
        <SequentialNavigation
            ariaLabel={ARIA_LABEL}
            next={NEXT_LINK_OBJECT}
            previous={PREVIOUS_LINK_OBJECT}
        />
    );

    const sequentialNavigation = screen.getByRole('navigation');

    expect(sequentialNavigation).toHaveAttribute('aria-label', ARIA_LABEL);
});

test('passing additional props', () => {
    render(
        <SequentialNavigation
            data-test="foo"
            next={NEXT_LINK_OBJECT}
            previous={PREVIOUS_LINK_OBJECT}
        />
    );

    const sequentialNavigation = screen.getByRole('navigation');
    expect(sequentialNavigation?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SequentialNavigation
            className="foo"
            next={NEXT_LINK_OBJECT}
            previous={PREVIOUS_LINK_OBJECT}
        />
    );

    const sequentialNavigation = screen.getByRole('navigation');
    expect(sequentialNavigation).toHaveClass('foo', 'ds_sequential-nav');
});
