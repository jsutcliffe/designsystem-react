import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ConfirmationMessage from './confirmation-message';

const titleString = 'Landlord added successfully';

test('renders correctly with icon, title and message', () => {
    render(
        <ConfirmationMessage title={titleString}>
            <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
        </ConfirmationMessage>
    );

    const container = document.querySelector('.ds_confirmation-message');
    const header = screen.getByRole('heading');

    expect(container?.ariaLive).toEqual('polite');

    expect(header.tagName).toEqual('H3');
    expect(header.textContent).toEqual(titleString)
});

test("does not render body when no children specified", () => {
  const { container } = render(<ConfirmationMessage title={titleString} />);

  expect(
    container.querySelector(".ds_confirmation-message__body"),
  ).not.toBeInTheDocument();
});

test('renders confirmation message with custom aria live and custom heaer level', () => {
    const titleString = 'Landlord added successfully';

    render(
        <ConfirmationMessage headerLevel="h2" ariaLive="alert" title={titleString}>
            <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
        </ConfirmationMessage>
    );

    const container = document.querySelector('.ds_confirmation-message');
    const header = screen.getByRole('heading');

    expect(container?.ariaLive).toEqual('alert');

    expect(header.tagName).toEqual('H2');
});

test('passing additional props', () => {
    render(
        <ConfirmationMessage data-test="foo" title={titleString}>
            <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
        </ConfirmationMessage>
    );

    const container = document.querySelector('.ds_confirmation-message') as HTMLElement;
    expect(container?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <ConfirmationMessage className="foo" title={titleString}>
            <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
        </ConfirmationMessage>
    );

    const container = document.querySelector('.ds_confirmation-message');
    expect(container).toHaveClass('foo', 'ds_confirmation-message');
})
