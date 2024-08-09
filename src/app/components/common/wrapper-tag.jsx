import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Wraps any given children in a given `tag`.
 *
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const WrapperTag = forwardRef(function WrapperTag({
    children,
    tagName = 'div',
    ...props
}, ref) {
    return React.createElement(
        tagName,
        {
            ...props,
            ref
        },
        children
    )
});
WrapperTag.propTypes = {
    children: PropTypes.element,
    tagName: PropTypes.string
};

export default WrapperTag;
