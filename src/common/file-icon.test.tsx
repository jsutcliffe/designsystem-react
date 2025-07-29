import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FileIcon from './file-icon';

const iconName = 'Generic';

test('file icon renders correctly', () => {
    render(
        <FileIcon data-testid="icon"
            icon={iconName}
        />
    );

    const icon = screen.getByRole('img', { hidden: true });

    expect(icon).toHaveAttribute('role', 'img');
    expect(icon).toHaveAttribute('aria-label', '');
    expect(icon.tagName).toEqual('svg');
});

test('file icon with class name', () => {
    const className = 'foo';

    render(
        <FileIcon data-testid="icon"
            icon={iconName}
            className={className}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveClass('foo');
});

test('file icon with aria label', () => {
    const label = 'My icon';

    render(
        <FileIcon data-testid="icon"
            icon={iconName}
            ariaLabel={label}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveAttribute('aria-label', label);
    expect(icon).not.toHaveAttribute('aria-hidden');
});
