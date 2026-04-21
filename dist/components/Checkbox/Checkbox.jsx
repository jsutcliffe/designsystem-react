"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const context_1 = require("../../utils/context");
const HintText_1 = __importDefault(require("../../common/HintText"));
const clsx_1 = __importDefault(require("clsx"));
const Checkbox = ({ checked, hintText, id, isSmall, isExclusive, label, name, onBlur, onChange }) => {
    const hintTextId = `hint-text-${id}`;
    const behaviour = isExclusive && 'exclusive';
    function handleBlur(event) {
        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    }
    function handleChange(event) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }
    isSmall = isSmall || (0, react_1.useContext)(context_1.CheckboxRadioContext).isSmall;
    return (<>
            {isExclusive && <p className="ds_checkbox-separator">or</p>}
            <div className={(0, clsx_1.default)([
            'ds_checkbox',
            isSmall && 'ds_checkbox--small'
        ])}>

                <input aria-describedby={hintText ? hintTextId : undefined} className="ds_checkbox__input" data-behaviour={behaviour} defaultChecked={!!checked} id={id} name={name || id} onBlur={handleBlur} onChange={handleChange} type="checkbox"/>
                <label className="ds_checkbox__label" htmlFor={id}>{label}</label>
                {hintText && <HintText_1.default id={hintTextId}>{hintText}</HintText_1.default>}
            </div>
        </>);
};
Checkbox.displayName = 'Checkbox';
exports.default = Checkbox;
