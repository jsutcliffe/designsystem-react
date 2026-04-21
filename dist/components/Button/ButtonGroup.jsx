"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const ButtonGroup = ({ children, className, isInline, isWrap, ...props }) => {
    return (<div className={(0, clsx_1.default)([
            "ds_button-group",
            isInline && "ds_button-group--inline",
            isWrap && "ds_button-group--wrap",
            className
        ])} {...props}>
            {children}
        </div>);
};
ButtonGroup.displayName = 'ButtonGroup';
exports.default = ButtonGroup;
