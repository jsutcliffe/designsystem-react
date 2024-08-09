import React from 'react';
import PropTypes from 'prop-types';
import WrapperTag from '../common/wrapper-tag';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */

const Button = function ({
    children,
    hasIcon,
    iconLeft,
    href,
    small,
    style,
    styleAsLink,
    type = 'button',
    width,
    ...props
}) {
    // determine which HTML tag to use
    let tagName = 'button';
    if (href) {
        tagName = 'a';
        type = null;
    }

    return (
        <WrapperTag
            tagName={tagName}
            className={[
                !styleAsLink ? 'ds_button' : 'ds_link',
                width && `ds_button--${width}`,
                style && `ds_button--${style}`,
                small && 'ds_button--small',
                hasIcon && 'ds_button--has-icon',
                iconLeft && 'ds_button--has-icon--left'
            ].join(' ')}
            href={href}
            type={type}
            {...props}
        >
            { children }
        </WrapperTag>
    )
};
Button.propTypes = {
    children: PropTypes.element,
    hasIcon: PropTypes.bool,
    iconLeft: PropTypes.bool,
    href: PropTypes.string,
    styleAsLink: PropTypes.bool,
    small: PropTypes.bool,
    style: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string
};

export default Button;
