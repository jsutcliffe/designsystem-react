"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = __importDefault(require("../../common/Icon"));
const ScreenReaderText_1 = __importDefault(require("../../common/ScreenReaderText"));
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
const Button = ({ buttonStyle, children, className, icon, iconLeft, iconOnly = false, href, small, styleAsLink, type = 'button', width, ...props }) => {
    // determine which HTML tag to use
    let tagName = 'button';
    if (href) {
        tagName = 'a';
    }
    return (<WrapperTag_1.default tagName={tagName} className={[
            !styleAsLink ? 'ds_button' : 'ds_link',
            width && `ds_button--${width}`,
            buttonStyle && `ds_button--${buttonStyle}`,
            small && 'ds_button--small',
            (icon && !iconOnly) ? 'ds_button--has-icon' : undefined,
            iconLeft && 'ds_button--has-icon--left',
            className
        ].join(' ')} href={href} {...(tagName === 'button' ? { type: type } : {})} {...props}>
            {iconOnly ? <ScreenReaderText_1.default>{children}</ScreenReaderText_1.default> : children}

            {icon && <Icon_1.default icon={icon}/>}
        </WrapperTag_1.default>);
};
Button.displayName = 'Button';
exports.default = Button;
