import { useEffect, useRef } from 'react';
// @ts-ignore
import DSCheckboxes from '@scottish-government/design-system/src/forms/checkbox/checkboxes'
import HintText from '../../common/hint-text';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const CheckboxGroup: React.FC<SGDS.Component.Checkbox.Group> = ({
    children,
    ...props
}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSCheckboxes(ref.current).init();
        }
    }, [ref]);

    return (
        <div
            className="ds_checkboxes ds_field-group"
            data-module="ds-checkboxes"
            ref={ref}
            {...props}
        >
            {children}
        </div>
    )
};

/**
 * @param {Object} props - Properties for the element
 * @param {boolean} [props.checked] - Whether the checkbox should be checked on load
 * @param {string} [props.hintText] - Hint text
 * @param {string} props.id - Checkbox's id attribute
 * @param {boolean} [props.exclusive] - Is exclusive checkbox
 * @param {string} props.label - Label text
 * @param {string} [props.name] - Checkbox's name attribute
 * @param {function} [props.onBlur] - Function to fire in response to a blur event
 * @param {function} [props.onChange] - Function to fire in response to a change event
 * @param {boolean} [props.small] - Use the small variant
 * @returns {JSX.Element} - The element
 */
const Checkbox: React.FC<SGDS.Component.Checkbox> = ({
    checked,
    hintText,
    id,
    exclusive,
    label,
    name,
    onBlur,
    onChange,
    small
}) => {
    const hintTextId = `hint-text-${id}`;
    const behaviour = exclusive && 'exclusive';

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
        <>
            {exclusive && <p className="ds_checkbox-separator">or</p>}
            <div
                className={[
                    'ds_checkbox',
                    small && 'ds_checkbox--small'
                ].join(' ')}>

                <input
                    className="ds_checkbox__input"
                    data-behaviour={behaviour}
                    defaultChecked={!!checked}
                    id={id}
                    name={name || id}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="checkbox" />
                <label className="ds_checkbox__label" htmlFor={id} aria-describedby={hintTextId}>{label}</label>
                {hintText && <HintText id={hintTextId} text={hintText} />}
            </div>
        </>
    );
};

export default Checkbox;
