import { test, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SiteSearch from './site-search';

const id = 'site-search';
const labelText = 'Search';
const placeholderText = 'Search';

test('site search renders correctly', () => {
    render(
        <SiteSearch />
    );

    const searchForm = screen.getByRole('search');
    const searchFormContainer = searchForm.parentNode;
    const searchLabel = document.querySelector('label');
    const searchInput = within(searchForm).getByRole('searchbox');
    const inputWrapper = searchInput.parentNode;
    const searchButton = within(searchForm).getByRole('button');

    expect(searchFormContainer).toHaveClass('ds_site-search');
    expect(searchFormContainer.tagName).toEqual('DIV');
    expect(searchFormContainer).not.toHaveAttribute('id', 'site-search-autocomplete');

    expect(searchForm).toHaveClass('ds_site-search__form');
    expect(searchForm).toHaveAttribute('method', 'GET');
    expect(searchForm).toHaveAttribute('action', '/search');

    expect(searchLabel.textContent).toEqual(labelText);
    expect(searchLabel).toHaveAttribute('for', id);
    expect(searchLabel).toHaveAttribute('id', `${id}-label`);
    expect(searchLabel).toHaveClass('ds_label', 'visually-hidden');

    expect(inputWrapper).toHaveClass('ds_input__wrapper  ds_input__wrapper--has-icon');
    expect(inputWrapper.tagName).toEqual('DIV');

    expect(searchInput).toHaveClass('ds_input', 'ds_site-search__input');
    expect(searchInput).toHaveAttribute('id', id);
    expect(searchInput).toHaveAttribute('placeholder', placeholderText);
    expect(searchInput).toHaveAttribute('required');
    expect(searchInput).toHaveAttribute('spellcheck', 'false');
    expect(searchInput).toHaveAttribute('type', 'search');
    expect(searchInput).toHaveAttribute('name', 'q');
    expect(searchInput).not.toHaveAttribute('autocomplete');

    expect(searchButton).toHaveClass('ds_button');
    expect(searchButton).toHaveAttribute('type', 'submit');
    expect(searchButton.textContent).toEqual('Search');
});

test('custom action', () => {
    render(
        <SiteSearch action="/foo" />
    );

    const searchForm = screen.getByRole('search');

    expect(searchForm).toHaveAttribute('action', '/foo');
});

test('custom id', () => {
    render(
        <SiteSearch id="foo" />
    );

    const searchForm = screen.getByRole('search');
    const searchInput = within(searchForm).getByRole('searchbox');

    expect(searchInput).toHaveAttribute('id', 'foo');
});

test('custom method', () => {
    render(
        <SiteSearch method="POST" />
    );

    const searchForm = screen.getByRole('search');

    expect(searchForm).toHaveAttribute('method', 'POST');
});

test('custom name', () => {
    render(
        <SiteSearch name="foo" />
    );

    const searchForm = screen.getByRole('search');
    const searchInput = within(searchForm).getByRole('searchbox');

    expect(searchInput).toHaveAttribute('name', 'foo');
});

test('custom placeholder', () => {
    render(
        <SiteSearch placeholder="foo" />
    );

    const searchForm = screen.getByRole('search');
    const searchInput = within(searchForm).getByRole('searchbox');

    expect(searchInput).toHaveAttribute('placeholder', 'foo');
});

test('autocomplete', () => {
    const autocompleteSuggestionMappingFunction = vi.fn();
    const suggestionsId = 'autocomplete-suggestions';

    render(
        <SiteSearch
            autocompleteEndpoint="/endpoint"
            autocompleteSuggestionMappingFunction={autocompleteSuggestionMappingFunction}
        />
    )

    const searchForm = screen.getByRole('search');
    const searchFormContainer = searchForm.parentNode;
    const searchInput = within(searchForm).getByRole('searchbox');
    const autocompleteStatus = within(searchForm).getByRole('status');
    const suggestionsContainer = document.querySelector('.ds_autocomplete__suggestions');
    const suggestionsList = within(searchForm).getByRole('listbox');

    expect(searchFormContainer).toHaveClass('ds_autocomplete');
    expect(searchFormContainer).toHaveAttribute('id', `${id}-autocomplete`);

    expect(autocompleteStatus).toBeInTheDocument();
    expect(autocompleteStatus).toHaveClass('visually-hidden');
    expect(autocompleteStatus).toHaveAttribute('aria-live', 'polite');
    expect(autocompleteStatus).toHaveAttribute('id', 'autocomplete-status');
    expect(autocompleteStatus.tagName).toEqual('DIV');

    expect(searchInput).toHaveAttribute('aria-autocomplete', 'list');
    expect(searchInput).toHaveAttribute('aria-owns', suggestionsId);
    expect(searchInput).toHaveAttribute('autocomplete', 'off');
    expect(searchInput).toHaveClass('js-autocomplete-input');

    expect(suggestionsContainer).toHaveAttribute('id', suggestionsId);
    expect(suggestionsContainer.tagName).toEqual('DIV');

    expect(suggestionsList).toHaveClass('ds_autocomplete__suggestions-list');
    expect(suggestionsList).toHaveAttribute('aria-labelledby', `${id}-label`);
    expect(suggestionsList.tagName).toEqual('OL');

});

test('passing additional props', () => {
    render(
        <SiteSearch data-test="foo" />
    );

    const searchForm = screen.getByRole('search');
    const searchFormContainer = searchForm.parentNode;
    expect(searchFormContainer?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SiteSearch className="foo" />
    );

    const searchForm = screen.getByRole('search');
    const searchFormContainer = searchForm.parentNode;
    expect(searchFormContainer).toHaveClass('foo', 'ds_site-search');
});
