import React from 'react';
import PropTypes from 'prop-types';

/**
 * Wraps any given children in a given `tag`.
 *
 * @param {Object} props - Properties for the element
 * @param {string} [props.tagName='div'] - Element type to use
 * @returns {JSX.Element} - The element
 */
const WrapperTag = function ({
    children,
    tagName = 'div',
    ...props
}) {
    const TagName = tagName;
    return <TagName {...props}>{children}</TagName>;
};
WrapperTag.propTypes = {
    children: PropTypes.element,
    tagName: PropTypes.string
};

export default WrapperTag;
