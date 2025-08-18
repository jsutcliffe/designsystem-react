"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HintText_1 = __importDefault(require("../../common/HintText"));
const RadioButton = ({ checked, hintText, id, label, name, onBlur, onChange, small }) => {
    const hintTextId = `hint-text-${id}`;
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
    return (<div className={[
            'ds_radio',
            small && 'ds_radio--small'
        ].join(' ')}>
            <input aria-describedby={hintText ? hintTextId : undefined} className="ds_radio__input" defaultChecked={!!checked} id={id} name={name} onBlur={handleBlur} onChange={handleChange} type="radio"/>
            <label className="ds_radio__label" htmlFor={id}>{label}</label>
            {hintText && <HintText_1.default id={hintTextId} text={hintText}/>}
        </div>);
};
RadioButton.displayName = 'RadioButton';
exports.default = RadioButton;
