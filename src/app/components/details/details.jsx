import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Details = function({
    children,
    summary,
    ...props
}) {
    return (
        <details
            className={[
                "ds_details",
            ].join(' ')}
            {...props}
        >
            <summary className="ds_details__summary">
                {summary}
            </summary>
            <div className="ds_details__text">
                {children}
            </div>
        </details>
    );
};
Details.propTypes = {
    children: PropTypes.element,
    summary: PropTypes.string.isRequired
};

export default Details;
