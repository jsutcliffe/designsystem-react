"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const Tag = ({ children, className, colour, ...props }) => {
    return (<span className={(0, clsx_1.default)([
            'ds_tag',
            className,
            colour && `ds_tag--${colour}`
        ])} {...props}>
            {children}
        </span>);
};
Tag.displayName = 'Tag';
exports.default = Tag;
