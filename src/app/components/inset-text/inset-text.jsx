import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const InsetText = function ({
    children,
    ...props
}) {
    return (
        <div
            className="ds_inset-text"
            {...props}
        >
            <div className="ds_inset-text__text">
                {children}
            </div>
        </div>
    );
};
InsetText.propTypes = {
    children: PropTypes.element
};

export default InsetText;
