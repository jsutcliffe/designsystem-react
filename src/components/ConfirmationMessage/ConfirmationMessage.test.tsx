import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ConfirmationMessage from './ConfirmationMessage';

const TITLE_TEXT = 'Landlord added successfully';

test('renders correctly with icon, title and message', () => {
    render(
        <ConfirmationMessage title={TITLE_TEXT}>
            <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
        </ConfirmationMessage>
    );

    const container = document.querySelector('.ds_confirmation-message');
    const heading = screen.getByRole('heading');

    expect(container?.ariaLive).toEqual('polite');

    expect(heading.tagName).toEqual('H3');
    expect(heading.textContent).toEqual(TITLE_TEXT)
});

test("does not render body when no children specified", () => {
  const { container } = render(<ConfirmationMessage title={TITLE_TEXT} />);

  expect(
    container.querySelector(".ds_confirmation-message__body"),
  ).not.toBeInTheDocument();
});

test('renders confirmation message with custom aria live and custom heaer level', () => {
    render(
        <ConfirmationMessage headingLevel="h2" ariaLive="alert" title={TITLE_TEXT}>
            <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
        </ConfirmationMessage>
    );

    const container = document.querySelector('.ds_confirmation-message');
    const heading = screen.getByRole('heading');

    expect(container?.ariaLive).toEqual('alert');

    expect(heading.tagName).toEqual('H2');
});

test('passing additional props', () => {
    render(
        <ConfirmationMessage data-test="foo" title={TITLE_TEXT}>
            <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
        </ConfirmationMessage>
    );

    const container = document.querySelector('.ds_confirmation-message') as HTMLElement;
    expect(container?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <ConfirmationMessage className="foo" title={TITLE_TEXT}>
            <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
        </ConfirmationMessage>
    );

    const container = document.querySelector('.ds_confirmation-message');
    expect(container).toHaveClass('foo', 'ds_confirmation-message');
})
