import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DSAutocomplete from '@scottish-government/design-system/src/components/autocomplete/autocomplete';
import Button from '../button/button';

/**
 * @param {Object} props - Properties for the element
 * @param {string} props.action - Search form's 'action' attribute
 * @param {string} props.autocompleteEndpoint
 * @param {function} props.autocompleteSuggestionMappingFunction
 * @param {string} [props.id='site-search'] - Search input field's id attribute
 * @param {string} [props.method='GET'] - The form method to use
 * @param {number} [props.minLength=3] - Minimum number of characters needed to trigger autocomplete
 * @param {string} [props.name='q'] - Search field's name attribute
 * @param {string} [props.placeholder='search'] - Search field's placeholder attribute
 * @returns {JSX.Element} - The element
 */
const SiteSearch = function ({
    action = '/search',
    autocompleteEndpoint,
    autocompleteSuggestionMappingFunction,
    id = 'site-search',
    method = 'GET',
    minLength = 3,
    name = 'q',
    placeholder = 'Search',
    ...props
}) {
    const ref = useRef(null);
    const autocompleteId = id + '-autocomplete';
    const hasAutocomplete = !!autocompleteEndpoint;

    useEffect(() => {
        if (hasAutocomplete && ref.current) {
            const options = {};
            if (minLength) {
                options.minLength = minLength;
            }
            if (autocompleteSuggestionMappingFunction) {
                options.suggestionMappingFunction = autocompleteSuggestionMappingFunction
            }

            const autocomplete = new DSAutocomplete(
                document.getElementById(autocompleteId),
                autocompleteEndpoint,
                options
            );

            autocomplete.init();
        }
    }, [ref, autocompleteEndpoint, autocompleteId, hasAutocomplete, minLength, autocompleteSuggestionMappingFunction]);

    return (
        <div
            className={[
                'ds_site-search',
                hasAutocomplete && 'ds_autocomplete'
            ].join(' ')}
            id={autocompleteId}
            ref={ref}
            {...props}
        >

            <form role="search" className="ds_site-search__form" method={method} action={action}>
                <label className="ds_label  visually-hidden" htmlFor={id} id={id + '-label'}>Search</label>

                {hasAutocomplete && (
                    <div role="status" aria-live="polite" id="autocomplete-status" className="visually-hidden"></div>

                )}

                <div className="ds_input__wrapper  ds_input__wrapper--has-icon">
                    <input aria-autocomplete="list"
                        aria-haspopup="listbox"
                        aria-owns="autocomplete-suggestions"
                        autoComplete="off"
                        className="ds_input  ds_site-search__input  js-autocomplete-input"
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        required
                        spellCheck="false"
                        type="search"
                    />
                    <Button type="submit" icon="search" iconOnly>Search</Button>

                    {hasAutocomplete && (
                        <div id="autocomplete-suggestions" className="ds_autocomplete__suggestions">
                            <ol className="ds_autocomplete__suggestions-list" role="listbox" aria-labelledby="site-search-label"></ol>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};
SiteSearch.propTypes = {
    action: PropTypes.string,
    autocompleteEndpoint: PropTypes.string,
    autocompleteSuggestionMappingFunction: PropTypes.function,
    id: PropTypes.string,
    method: PropTypes.string,
    minLength: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string
};

export default SiteSearch;
