import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../common/dsicon';
import ScreenReaderText from '../common/screen-reader-text';
import WrapperTag from '../common/wrapper-tag';

/**
 * @typedef {'primary'|'secondary'|'cancel'} ButtonStyle
 * @typedef {'fluid'|'fixed'|'max'} ButtonWidth
 *
 * @param {Object} props - Properties for the element
 * @param {string} props.icon - Icon to use
 * @param {boolean} [props.iconLeft] - Button's icon is aligned to the left
 * @param {boolean} [props.iconOnly=false] - Button is an icon-only button
 * @param {string} [props.href] - URL of the button
 * @param {boolean} [props.small] - Use the small variant
 * @param {ButtonStyle} props.style - Style of the button
 * @param {boolean} props.styleAsLink - Whether to make the button look like a link
 * @param {ButtonType} [props.type='button'] - Button type attribute
 * @param {ButtonWidth} props.width - Width of the button
 * @returns {JSX.Element} - The element
 */
const Button = function ({
    children,
    icon,
    iconLeft,
    iconOnly = false,
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
                (icon && !iconOnly) && 'ds_button--has-icon',
                iconLeft && 'ds_button--has-icon--left'
            ].join(' ')}
            href={href}
            type={type}
            {...props}
        >
            {iconOnly ? <ScreenReaderText>{children}</ScreenReaderText> : children}

            {icon && <Icon icon={icon}/>}
        </WrapperTag>
    )
};
Button.propTypes = {
    children: PropTypes.element,
    icon: PropTypes.string,
    iconLeft: PropTypes.bool,
    iconOnly: PropTypes.bool,
    href: PropTypes.string,
    styleAsLink: PropTypes.bool,
    small: PropTypes.bool,
    style: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string
};

export default Button;
