import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ActionLink from './ActionLink';

const ONCLICK_FUNCTION = vi.fn();
const ACTION_HREF = "#foo"
const ACTION_ONCLICK = ONCLICK_FUNCTION;
const ACTION_TEXT = 'Name';
const DESCRIBEDBY_ID = 'q1-name';

test('button action', () => {
    render(
        <ActionLink
            describedby={DESCRIBEDBY_ID}
            href={undefined}
            onclick={ACTION_ONCLICK}
        >
            {ACTION_TEXT}
        </ActionLink>
    );

    const action = screen.getByRole('button');

    expect(action).toHaveClass('ds_link');
    expect(action).toHaveAttribute('aria-describedby', DESCRIBEDBY_ID);
    expect(action).toHaveAttribute('type', 'button');
    expect(action).not.toHaveAttribute('href');
    expect(action.tagName).toEqual('BUTTON');
    expect(action.textContent).toEqual(ACTION_TEXT);

    fireEvent.click(action);

    expect(ONCLICK_FUNCTION).toHaveBeenCalled();
});

test('link action', () => {
    render(
        <ActionLink
            describedby={DESCRIBEDBY_ID}
            href={ACTION_HREF}
            onclick={ACTION_ONCLICK}
        >
            {ACTION_TEXT}
        </ActionLink >
    );

    const action = screen.getByRole('link');

    expect(action).toHaveClass('ds_link');
    expect(action).toHaveAttribute('aria-describedby', DESCRIBEDBY_ID);
    expect(action).toHaveAttribute('href', ACTION_HREF);
    expect(action).not.toHaveAttribute('type');
    expect(action.tagName).toEqual('A');
    expect(action.textContent).toEqual(ACTION_TEXT);
});

test('action with custom element', () => {
    render(
        <ActionLink
            describedby={DESCRIBEDBY_ID}
            href={ACTION_HREF}
            onclick={ACTION_ONCLICK}
            linkComponent={
            ({ className, ...props }) => (
                <strong role="link" className={className} {...props}/>
        )}>
            {ACTION_TEXT}
        </ActionLink>
    );

    const action = screen.getByRole('link');

    expect(action).toHaveAttribute('aria-describedby', DESCRIBEDBY_ID);
    expect(action?.tagName).toEqual('STRONG');
    expect(action?.textContent).toEqual(ACTION_TEXT);

    fireEvent.click(action);

    expect(ONCLICK_FUNCTION).toHaveBeenCalled();
});
