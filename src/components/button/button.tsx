import Icon from '../../common/icon';
import ScreenReaderText from '../../common/screen-reader-text';
import WrapperTag from '../../common/wrapper-tag';

/**
 * @param {Object} props - Properties for the element
 * @param {string} props.style - Style of the button
 * @param {string} props.icon - Icon to use
 * @param {boolean} [props.iconLeft] - Button's icon is aligned to the left
 * @param {boolean} [props.iconOnly=false] - Button is an icon-only button
 * @param {string} [props.href] - URL of the button
 * @param {boolean} [props.small] - Use the small variant
 * @param {boolean} props.styleAsLink - Whether to make the button look like a link
 * @param {string} [props.type='button'] - Button type attribute
 * @param {string} props.width - Width of the button
 * @returns {JSX.Element} - The element
 */
const Button: React.FC<SGDS.Component.Button> = ({
    children,
    buttonStyle,
    icon,
    iconLeft,
    iconOnly = false,
    href,
    small,
    styleAsLink,
    type = 'button',
    width,
    ...props
}) => {
    // determine which HTML tag to use
    let tagName = 'button';
    if (href) {
        tagName = 'a';
    }

    return (
        <WrapperTag
            tagName={tagName}
            className={[
                !styleAsLink ? 'ds_button' : 'ds_link',
                width && `ds_button--${width}`,
                buttonStyle && `ds_button--${buttonStyle}`,
                small && 'ds_button--small',
                (icon && !iconOnly) && 'ds_button--has-icon',
                iconLeft && 'ds_button--has-icon--left'
            ].join(' ')}
            href={href}
            {...(tagName === 'button' ? { type: type } : {})}
            {...props}
        >
            {iconOnly ? <ScreenReaderText>{children}</ScreenReaderText> : children}

            {icon && <Icon icon={icon}/>}
        </WrapperTag>
    )
};

export default Button;
