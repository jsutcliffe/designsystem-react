import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @param {boolean} [props.accessible=false] - Controls aria-hidden on the icon
 * @param {string} [props.className] - Additional CSS class name for the icon
 * @param {boolean} [props.fill=false] - Whether to use the filled version of an icon
 * @param {string} props.icon - Name of the icon in the stack
 * @param {string} [props.iconPath='./icons.stack.svg'] - Path to the icon stack
 * @param {string} [props.size] - Size of to use for the icon
 * @param {string} [props.title] - Value to use for an aria-label on the icon
 * @returns {JSX.Element} - The element
 */
const Icon = function ({
    accessible = false,
    className,
    fill,
    icon,
    iconPath = './icons.stack.svg',
    size,
    title,
    ...props
}) {
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
