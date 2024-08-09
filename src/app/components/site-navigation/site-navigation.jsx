import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */

export const SiteNavLink = function ({
    current=false,
    href,
    title,
    ...props
}) {
    return (
        <li
            className="ds_site-navigation__item"
            {...props}
        >
            <a
                href={href}
                className={[
                    'ds_site-navigation__link',
                    current && 'ds_current'
                ].join(' ')}>{title}</a>
        </li>
    );
};
SiteNavLink.propTypes = {
    current: PropTypes.bool,
    href: PropTypes.string,
    title: PropTypes.string.isRequired
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteNavigation = function ({
    children,
    ...props
}) {

    return (
        <nav
            className="ds_site-navigation"
            {...props}
        >
            <ul className="ds_site-navigation__list">
                {children}
            </ul>
        </nav>
    );
};
SiteNavigation.propTypes = {
    children: PropTypes.element
};

export default SiteNavigation;
