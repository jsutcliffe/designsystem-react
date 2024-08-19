import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Icon = function ({
    accessible = false,
    className,
    fill,
    icon,
    iconPath,
    size,
    title,
    ...props
}) {
    iconPath = iconPath || './icons.stack.svg';

    return (
        <svg
            aria-hidden={!accessible}
            aria-label={title}
            className={[
                'ds_icon',
                className,
                fill && 'ds_icon--fill',
                size && `ds_icon--${size}`
            ].join(' ')}
            role="img"
            {...props}
        >
            <use xlinkHref={`${iconPath}#${icon}`} />
        </svg>
    );
};
Icon.propTypes = {
    accessible: PropTypes.bool,
    className: PropTypes.string,
    fill: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    iconPath: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default Icon;
