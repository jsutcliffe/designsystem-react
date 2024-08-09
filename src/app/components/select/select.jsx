import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../error-message/error-message';
import HintText from '../common/hint-text';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Option = function ({
    text,
    value
}) {
    return (
        <option value={value}>{text}</option>
    );
};
Option.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.string
}

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Select = function ({
    children,
    defaultValue,
    error,
    errorMessage,
    hintText,
    id,
    label,
    name,
    placeholder,
    width,
    ...props
}) {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;

    return (
        <>
            <label className="ds_label" htmlFor={id}>{label}</label>
            {hintText && <HintText id={hintTextId} text={hintText} />}
            {errorMessage && <ErrorMessage id={errorMessageId} text={errorMessage}/>}
            <div
                className={[
                    "ds_select-wrapper",
                    error && 'ds_input--error',
                    width && `ds_input--${width}`,
                ].join(' ')}
                {...props}
            >
                <select defaultValue={defaultValue} className="ds_select" id={id} name={name || id}>
                    <option value="">{placeholder}</option>
                    {children}
                </select>
                <span className="ds_select-arrow" aria-hidden="true"></span>
            </div>
        </>
    );
};
Select.propTypes = {
    children: PropTypes.element.isRequired,
    defaultValue: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    hintText: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    width: PropTypes.string
}

export default Select;
