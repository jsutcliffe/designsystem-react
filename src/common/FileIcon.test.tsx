import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FileIcon from './FileIcon';

const ICON_NAME = 'Generic';

test('file icon renders correctly', () => {
    render(
        <FileIcon data-testid="icon"
            icon={ICON_NAME}
        />
    );

    const icon = screen.getByRole('img', { hidden: true });

    expect(icon).toHaveAttribute('role', 'img');
    expect(icon).toHaveAttribute('aria-label', '');
    expect(icon.tagName).toEqual('svg');
});

test('file icon with class name', () => {
    const CLASSNAME = 'foo';

    render(
        <FileIcon data-testid="icon"
            icon={ICON_NAME}
            className={CLASSNAME}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveClass('foo');
});

test('file icon with aria label', () => {
    const LABEL = 'My icon';

    render(
        <FileIcon data-testid="icon"
            icon={ICON_NAME}
            ariaLabel={LABEL}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveAttribute('aria-label', LABEL);
    expect(icon).not.toHaveAttribute('aria-hidden');
});
