import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

const iconName = 'Search';

test('icon renders correctly', () => {
    render(
        <Icon data-testid="icon"
            icon={iconName}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveClass('ds_icon');
    expect(icon).toHaveAttribute('aria-hidden');
    expect(icon).toHaveAttribute('role', 'img');
    expect(icon.tagName).toEqual('svg');
});

test('icon with class name', () => {
    const className = 'foo';

    render(
        <Icon data-testid="icon"
            icon={iconName}
            className={className}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveClass('foo', 'ds_icon');
});

test('icon with fill', () => {
    render(
        <Icon data-testid="icon"
            icon={iconName}
            fill
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveClass('ds_icon--fill');
});

test('icon with size', () => {
    const size = 48;

    render(
        <Icon data-testid="icon"
            icon={iconName}
            iconSize={size}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveClass(`ds_icon--${size}`);
});

test('icon with aria label', () => {
    const label = 'My icon';

    render(
        <Icon data-testid="icon"
            icon={iconName}
            ariaLabel={label}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveAttribute('aria-label', label);
    expect(icon).not.toHaveAttribute('aria-hidden');
});
