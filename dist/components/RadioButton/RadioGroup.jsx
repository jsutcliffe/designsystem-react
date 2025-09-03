"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const context_1 = require("../../utils/context");
const RadioGroup = ({ children, className, inline, name, small = false, ...props }) => {
    return (<div className={[
            'ds_radios',
            'ds_field-group',
            inline && 'ds_field-group--inline',
            className
        ].join(' ')} {...props}>
            <context_1.CheckboxRadioContext value={{ small, name }}>
                {children}
            </context_1.CheckboxRadioContext>
        </div>);
};
RadioGroup.displayName = 'RadioGroup';
exports.default = RadioGroup;
