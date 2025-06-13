import Icon from '../../common/icon';
import ScreenReaderText from '../../common/screen-reader-text';
import WrapperTag from '../../common/wrapper-tag';

const Button: React.FC<SGDS.Component.Button> = ({
    buttonStyle,
    children,
    className,
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
                (icon && !iconOnly) ? 'ds_button--has-icon' : undefined,
                iconLeft && 'ds_button--has-icon--left',
                className
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

Button.displayName = 'Button';

export default Button;
