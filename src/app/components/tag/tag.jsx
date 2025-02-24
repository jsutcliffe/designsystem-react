import React from 'react';
import PropTypes from 'prop-types';
import '../../typedefs';

/**
 * @param {Object} props - Properties for the element
 * @param {string} [props.className] - Additional CSS class(es)
 * @param {TagColour} [props.colour] - Tag colour
 * @param {string} props.title - Text content
 * @returns {JSX.Element} - The element
 */
const Tag = function ({
    className,
    colour,
    title,
    ...props
}) {
    return (
        <span
            className={[
                'ds_tag',
                className,
                colour && `ds_tag--${colour}`,
            ].join(' ')}
            {...props}
        >
            {title}
        </span>
    );
};
Tag.propTypes = {
    className: PropTypes.string,
    colour: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default Tag;
