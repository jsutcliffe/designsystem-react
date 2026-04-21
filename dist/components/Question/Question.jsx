"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorMessage_1 = __importDefault(require("../ErrorMessage"));
const HintText_1 = __importDefault(require("../../common/HintText"));
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
const clsx_1 = __importDefault(require("clsx"));
const Question = function ({ children, className, errorMessage, hasError, hintText, legend, tagName = 'div', ...props }) {
    return (<WrapperTag_1.default tagName={tagName} className={(0, clsx_1.default)([
            'ds_question',
            hasError && 'ds_question--error',
            className
        ])} {...props}>
            {legend && <legend>{legend}</legend>}
            {hintText && <HintText_1.default>{hintText}</HintText_1.default>}
            {hasError && errorMessage && <ErrorMessage_1.default>{errorMessage}</ErrorMessage_1.default>}
            {children}
        </WrapperTag_1.default>);
};
Question.displayName = 'Question';
exports.default = Question;
