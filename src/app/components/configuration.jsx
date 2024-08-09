import React from 'react';
import PropTypes from 'prop-types';
import Details from './details/details';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Configuration = function ({
    componentName,
    children
}) {
    return (
        <Details summary={componentName + ' configuration'}>
            {children}
        </Details>
    );
};
Configuration.propTypes = {
    componentName: PropTypes.string.isRequired,
    children: PropTypes.element
}

export default Configuration;
