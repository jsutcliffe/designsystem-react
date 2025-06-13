import ErrorMessage from '../error-message/error-message';
import HintText from '../../common/hint-text';

const Option: React.FC<SGDS.Component.Select.Option> = function ({
    text,
    value
}) {
    return (
        <option value={value}>{text}</option>
    );
};

const Select: React.FC<SGDS.Component.Select> = function ({
    className,
    defaultValue,
    error,
    errorMessage,
    hintText,
    id,
    label,
    name,
    onBlur,
    onChange,
    options,
    placeholder,
    width,
    ...props
}) {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const describedbys: string[] = [];

    if (hintText) { describedbys.push(hintTextId) };
    if (errorMessage) { describedbys.push(errorMessageId) };

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
                    className
                ].join(' ')}
                {...props}
            >
                <select
                    aria-describedby={describedbys.join(' ')}
                    className="ds_select"
                    defaultValue={defaultValue}
                    id={id}
                    name={name || id}
                    onBlur={handleBlur}
                    onChange={handleChange}
                >
                    <option value="">{placeholder}</option>
                    {options && options.map((option, index: number) => (
                        <Option
                            value={option.value}
                            text={option.text}
                            key={`option-${index}`}
                        />
                    ))}
                </select>
                <span className="ds_select-arrow" aria-hidden="true"></span>
            </div>
        </>
    );
};

Select.displayName = 'Select';

export default Select;
