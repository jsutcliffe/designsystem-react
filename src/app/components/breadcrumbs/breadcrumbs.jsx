import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Breadcrumb = function ({
    href,
    title,
    ...props
}) {
    return (
        <li
            className="ds_breadcrumbs__item"
            {...props}
        >

            {href ? (
                <a
                    className="ds_breadcrumbs__link"
                    href={href}
                >
                    {title}
                </a>
            ) : (
                title
            )}
        </li>
    );
};
Breadcrumb.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string.isRequired
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Breadcrumbs = function ({
    children,
    ...props
}) {

    return (
        <nav
            aria-label="Breadcrumb"
            {...props}
        >
            <ol className="ds_breadcrumbs">
                {children}
            </ol>
        </nav>
    );
};
Breadcrumbs.propTypes = {
    children: PropTypes.element
};

export default Breadcrumbs;
