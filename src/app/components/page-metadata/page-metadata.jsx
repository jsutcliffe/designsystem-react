import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @param {string} props.name - Text label for the metadata item
 * @returns {JSX.Element} - The element
 */
export const MetadataItem = function({
    children,
    name,
    ...props
}) {
    // todo: add whitespace between children items

    return (
        <div className="ds_metadata__item"
            {...props}
        >
            <dt className="ds_metadata__key">{name}</dt>{' '}
            <dd className="ds_metadata__value">
                {children}
            </dd>
        </div>
    );
};
MetadataItem.propTypes = {
    children: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired
};

/**
 * @param {Object} props - Properties for the element
 * @param {boolean} props.inline - Use the 'inline' option
 * @returns {JSX.Element} - The element
 */
const Metadata = function({
    children,
    inline,
    ...props
}) {
    return (
        <dl
            className={[
                'ds_metadata',
                inline && 'ds_metadata--inline',
            ].join(' ')}
            {...props}
        >
            {children}
        </dl>
    );
};
Metadata.propTypes = {
    children: PropTypes.element,
    inline: PropTypes.bool
};

export default Metadata;
