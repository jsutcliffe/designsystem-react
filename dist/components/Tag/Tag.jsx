"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag = ({ children, className, colour, ...props }) => {
    return (<span className={[
            'ds_tag',
            className,
            colour && `ds_tag--${colour}`,
        ].join(' ')} {...props}>
            {children}
        </span>);
};
Tag.displayName = 'Tag';
exports.default = Tag;
