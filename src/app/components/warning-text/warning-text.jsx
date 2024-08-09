import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const WarningText = function ({
    children,
    ...props
}) {
    return (
        <div
            className="ds_warning-text"
            {...props}
        >
            <strong className="ds_warning-text__icon" aria-hidden="true"></strong>
            <strong className="visually-hidden">Warning</strong>
            <div className="ds_warning-text__text">
                {children}
            </div>
        </div>
    );
};
WarningText.propTypes = {
    children: PropTypes.element
};

export default WarningText;
