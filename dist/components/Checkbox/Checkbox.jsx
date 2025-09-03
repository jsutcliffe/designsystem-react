"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const context_1 = require("../../utils/context");
const HintText_1 = __importDefault(require("../../common/HintText"));
const Checkbox = ({ checked, hintText, id, exclusive, label, name, onBlur, onChange, small }) => {
    const hintTextId = `hint-text-${id}`;
    const behaviour = exclusive && 'exclusive';
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
    small = small || (0, react_1.useContext)(context_1.CheckboxRadioContext).small;
    return (<>
            {exclusive && <p className="ds_checkbox-separator">or</p>}
            <div className={[
            'ds_checkbox',
            small && 'ds_checkbox--small'
        ].join(' ')}>

                <input aria-describedby={hintText ? hintTextId : undefined} className="ds_checkbox__input" data-behaviour={behaviour} defaultChecked={!!checked} id={id} name={name || id} onBlur={handleBlur} onChange={handleChange} type="checkbox"/>
                <label className="ds_checkbox__label" htmlFor={id}>{label}</label>
                {hintText && <HintText_1.default id={hintTextId} text={hintText}/>}
            </div>
        </>);
};
Checkbox.displayName = 'Checkbox';
exports.default = Checkbox;
