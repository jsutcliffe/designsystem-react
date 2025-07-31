import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import HideThisPage from './HideThisPage';

test('hide this page renders correctly', () => {
    render(
        <HideThisPage data-testid="htp"/>
    );

    const hideThisPageElement = screen.getByTestId('htp');
    const link = within(hideThisPageElement).getByRole('link');
    const linkText = link.querySelector('strong');
    const linkHiddenText = link.querySelector('span');
    const text = within(hideThisPageElement).getByRole('paragraph');

    expect(hideThisPageElement).toHaveClass('ds_hide-page');
    expect(hideThisPageElement.tagName).toEqual('DIV');

    expect(link).toHaveAttribute('href', 'https://www.bbc.co.uk/weather');
    expect(link).toHaveClass('ds_hide-page__button', 'ds_button', 'js-hide-page');

    expect(linkText?.textContent).toEqual('Hide this page');
    expect(linkHiddenText).toHaveClass('visually-hidden', 'js-enabled-text');
    expect(linkHiddenText?.textContent).toEqual('Or press escape key to hide this page');
    expect(linkHiddenText?.previousSibling).toEqual(linkText);

    expect(text).toHaveClass('ds_hide-page__text', 'js-enabled-text');
    expect(text.textContent).toEqual('Or press Esc key');
    expect(text.previousSibling).toEqual(link);

    // other effects
    const instructionContainer = document.getElementById('hide-this-page-instruction');

    expect(instructionContainer).toBeInTheDocument();
    expect(instructionContainer).toHaveClass('visually-hidden', 'ds_hide-page');
    expect(instructionContainer?.textContent).toEqual('To leave the page quickly, press the escape key.');

    expect(document.body).toHaveClass('ds_has-hide-page');
});

test('custom escape URL', () => {
    const ESCAPE_URL = 'https://www.mygov.scot';

    render(
        <HideThisPage data-testid="htp" escapeUrl={ESCAPE_URL} />
    );

    const hideThisPageElement = screen.getByTestId('htp');
    const link = within(hideThisPageElement).getByRole('link');

    expect(link).toHaveAttribute('href', ESCAPE_URL);
})

test('passing additional props', () => {
    render(
        <HideThisPage data-testid="htp" data-test="foo"/>
    )

    const hideThisPageElement = screen.getByTestId('htp');
    expect(hideThisPageElement?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <HideThisPage data-testid="htp" className="foo"/>
    )

    const hideThisPageElement = screen.getByTestId('htp');
    expect(hideThisPageElement).toHaveClass('foo', 'ds_hide-page');
});
