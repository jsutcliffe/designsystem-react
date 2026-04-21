"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const ErrorMessage = ({ children, className, id, ...props }) => {
    return (<p className={(0, clsx_1.default)([
            'ds_question__error-message',
            className
        ])} id={id} {...props}>
            {children}
        </p>);
};
ErrorMessage.displayName = 'ErrorMessage';
exports.default = ErrorMessage;
