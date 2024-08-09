import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const NextLink = function ({
    href,
    title,
    ...props
}) {
    return (
        <div
            className="ds_sequential-nav__item  ds_sequential-nav__item--next"
            {...props}
        >
            <a href={href} className="ds_sequential-nav__button  ds_sequential-nav__button--right">
                <span className="ds_sequential-nav__text" data-label="Next">
                    {title}
                </span>
            </a>
        </div>
    );
};
NextLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const PrevLink = function ({
    href,
    title,
    ...props
}) {
    return (
        <div
            className="ds_sequential-nav__item  ds_sequential-nav__item--prev"
            {...props}
        >
            <a href={href} className="ds_sequential-nav__button  ds_sequential-nav__button--left">
                <span className="ds_sequential-nav__text" data-label="Previous">
                    {title}
                </span>
            </a>
        </div>
    );
};
PrevLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SequentialNavigation = function ({
    children,
    ...props
}) {

    return (
        <nav
            className="ds_sequential-nav"
            aria-label="Article navigatio"
            {...props}
        >
            {children}
        </nav>
    );
};
SequentialNavigation.propTypes = {
    children: PropTypes.element
};

export default SequentialNavigation;
