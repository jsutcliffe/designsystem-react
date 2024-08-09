import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ScreenReaderText = function ({
    children,
    ...props
}) {
    return (
        <span
            className="visually-hidden"
            {...props}
        >
            {children}
        </span>
    );
};
ScreenReaderText.propTypes = {
    children: PropTypes.element
};

export default ScreenReaderText;
