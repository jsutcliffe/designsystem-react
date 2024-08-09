import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const PageHeader = function({
    children,
    label,
    title,
    ...props
}) {
    return (
        <header
            className="ds_page-header"
            {...props}
        >
            {label && <span className="ds_page-header__label  ds_content-label">{label}</span>}
            <h1 className="ds_page-header__title">{title}</h1>

            {children}
        </header>
    );
};
PageHeader.propTypes = {
    children: PropTypes.element,
    label: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default PageHeader;
