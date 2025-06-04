import React, { Children } from 'react';
import HintText from '../../common/hint-text';

/**
 * @param {Object} props - Properties for the element
 * @param {boolean} [props.inline] - Whether to display its children inline
 * @param {string} props.name - The 'name' attribute of the child radios
 * @returns {JSX.Element} - The element
 */
export const RadioGroup: React.FC<SGDS.Component.RadioButton.Group> = ({
    children,
    inline,
    name,
    ...props
}) => {
    return (
        <div
            className={[
                'ds_radios',
                'ds_field-group',
                inline && 'ds_field-group--inline'
            ].join(' ')}
            {...props}
        >
            {Children.map(children, child => {
                const item = child as React.ReactElement<SGDS.Component.RadioButton>
                return React.cloneElement(item, { name: name });
            })}
        </div>
    )
};

/**
 * @param {Object} props - Properties for the element
 * @param {boolean} [props.checked] - Chcked on load
 * @param {string} [props.hintText] - Hint text content
 * @param {string} props.id - Radio button's id attribute
 * @param {string} props.label - Label text
 * @param {string} [props.name] - Radio button's name attribute
 * @param {function} [props.onBlur] - Function to fire in response to a blur event
 * @param {function} [props.onChange] - Function to fire in response to a change event
 * @param {boolean} [props.small] - Use the small variant
 * @returns {JSX.Element} - The element
 */
const Radio: React.FC<SGDS.Component.RadioButton> = ({
    checked,
    hintText,
    id,
    label,
    name,
    onBlur,
    onChange,
    small
}) => {
    const hintTextId = `hint-text-${id}`;

    function handleBlur(event: React.FocusEvent) {
        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    }

    function handleChange(event: React.ChangeEvent) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }

    return (
        <div
            className={[
                'ds_radio',
                small && 'ds_radio--small'
            ].join(' ')}>
            <input
                className="ds_radio__input"
                defaultChecked={!!checked}
                id={id}
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
                type="radio" />
            <label className="ds_radio__label" htmlFor={id} aria-describedby={hintTextId}>{label}</label>
            {hintText && <HintText id={hintTextId} text={hintText} />}
        </div>
    );
};

export default Radio;
