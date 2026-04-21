"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const InsetText = ({ children, className, ...props }) => {
    return (<div className={(0, clsx_1.default)([
            'ds_inset-text',
            className
        ])} {...props}>
            <div className="ds_inset-text__text">
                {children}
            </div>
        </div>);
};
InsetText.displayName = 'InsetText';
exports.default = InsetText;
