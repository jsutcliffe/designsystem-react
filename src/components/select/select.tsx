import ErrorMessage from '../error-message/error-message';
import HintText from '../../common/hint-text';

/**
 * @param {Object} props - Properties for the element
 * @param {string} props.text - Option text
 * @param {string} props.value - Option value
 * @returns {JSX.Element} - The element
 */
export const Option: React.FC<SGDS.Component.Select.Option> = function ({
    text,
    value
}) {
    return (
        <option value={value}>{text}</option>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @param {string} [props.defaultValue] - Value of the option to be selected on load
 * @param {boolean} [props.error] - Select is in error
 * @param {string} [props.errorMessage] - Error text
 * @param {string} [props.hintText] - Hint text
 * @param {string} props.id - Select's id attribute
 * @param {string} props.label - Label text
 * @param {string} [props.name] - Select's name attribute
 * @param {function} [props.onBlur] - Function to fire in response to a blur event
 * @param {function} [props.onChange] - Function to fire in response to a change event
 * @param {string} [props.placeholder] - Text for a valueless first option
 * @param {InputWidth} [props.width] - Width CSS class
 * @returns {JSX.Element} - The element
 */
const Select: React.FC<SGDS.Component.Select> = function ({
    children,
    width,
    defaultValue,
    error,
    errorMessage,
    hintText,
    id,
    label,
    name,
    onBlur,
    onChange,
    placeholder,
    ...props
}) {
    const errorMessageId = `error-message-${id}`;
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
                <select
                    className="ds_select"
                    defaultValue={defaultValue}
                    id={id}
                    name={name || id}
                    onBlur={handleBlur}
                    onChange={handleChange}
                >
                    <option value="">{placeholder}</option>
                    {children}
                </select>
                <span className="ds_select-arrow" aria-hidden="true"></span>
            </div>
        </>
    );
};

export default Select;
