import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Icon from './icon';

const defaultIconPath = './icons.stack.svg';
const iconName = 'search';

test('icon renders correctly', () => {
    render(
        <Icon data-testid="icon"
            icon={iconName}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});
    const use = icon.children[0];

    expect(icon).toHaveClass('ds_icon');
    expect(icon).toHaveAttribute('aria-hidden');
    expect(icon).toHaveAttribute('role', 'img');
    expect(icon.tagName).toEqual('svg');

    expect(use).toHaveAttribute('xlink:href', `${defaultIconPath}#${iconName}`)
    expect(use.tagName).toEqual('use')
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

    expect(icon).toHaveClass('foo');
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

test('icon with custom path', () => {
    const iconPath = '/path/to/icons.stack.svg';

    render(
        <Icon data-testid="icon"
            icon={iconName}
            iconPath={iconPath}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});
    const use = icon.children[0];

    expect(use).toHaveAttribute('xlink:href', `${iconPath}#${iconName}`)
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

test('icon with title', () => {
    const title = 'My icon';

    render(
        <Icon data-testid="icon"
            icon={iconName}
            title={title}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveAttribute('aria-label', title);
    expect(icon).not.toHaveAttribute('aria-hidden');
});
