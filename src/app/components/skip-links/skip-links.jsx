import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */

export const SkipLink = function ({
    href,
    title,
    ...props
}) {
    return (
        <li
            className="ds_skip-links__item"
            {...props}
        >
            <a href={href} className="ds_skip-links__link">{ title }</a>
        </li>
    );
};
SkipLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SkipLinks = function ({
    children,
    id = 'main-content',
    ...props
}) {
    const href = `#${id}`;

    return (
        <div
            className="ds_skip-links"
            {...props}
        >
            <ul className="ds_skip-links__list">
                <li className="ds_skip-links__item">
                    <a className="ds_skip-links__link" href={href}>Skip to main content</a>
                </li>
                {children}
            </ul>
        </div>
    );
};
SkipLinks.propTypes = {
    children: PropTypes.element.isRequired,
    id: PropTypes.string.isRequired
};

export default SkipLinks;
