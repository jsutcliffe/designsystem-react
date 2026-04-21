"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const WarningText = ({ children, className, ...props }) => {
    return (<div className={(0, clsx_1.default)([
            'ds_warning-text',
            className
        ])} {...props}>
            <strong className="ds_warning-text__icon" aria-hidden="true"></strong>
            <strong className="visually-hidden">Warning</strong>
            <div className="ds_warning-text__text">
                {children}
            </div>
        </div>);
};
WarningText.displayName = 'WarningText';
exports.default = WarningText;
