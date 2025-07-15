import { useEffect, useRef } from 'react';
// @ts-ignore
import DSCheckboxes from '@scottish-government/design-system/src/forms/checkbox/checkboxes'
import HintText from '../../common/hint-text';

export const Checkbox: React.FC<SGDS.Component.Checkbox> = ({
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
                    aria-describedby={hintText ? hintTextId : undefined}
                    className="ds_checkbox__input"
                    data-behaviour={behaviour}
                    defaultChecked={!!checked}
                    id={id}
                    name={name || id}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="checkbox" />
                <label
                    className="ds_checkbox__label"
                    htmlFor={id}
                >{label}</label>
                {hintText && <HintText id={hintTextId} text={hintText} />}
            </div>
        </>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @param {Array} items - Checkboxes
 * @param {boolean} small - Use the small display style for all checkboxes
 * @returns {JSX.Element} - The element
 */
export const CheckboxGroup: React.FC<SGDS.Component.Checkbox.Group> = ({
    className,
    items,
    small,
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
            className={[
                'ds_checkboxes',
                'ds_field-group',
                className
            ].join(' ')}
            data-module="ds-checkboxes"
            ref={ref}
            {...props}
        >
            {items && items.map((item, index: number) => (
                <Checkbox
                    exclusive={item.exclusive}
                    checked={item.checked}
                    hintText={item.hintText}
                    id={item.id}
                    key={'checkbox' + index}
                    label={item.label}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    small={small || item.small}
                />
            ))}
        </div>
    )
};

Checkbox.displayName = 'Checkbox';
CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
