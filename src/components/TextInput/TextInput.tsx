import { useEffect, useRef } from 'react';
// @ts-ignore
import DSCharacterCount from '@scottish-government/design-system/src/forms/character-count/character-count';
import Button from '../Button/Button';
import ConditionalWrapper from '../../common/ConditionalWrapper';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import HintText from '../../common/HintText';

const TextInput: React.FC<SGDS.Component.TextInput> = ({
    buttonIcon,
    buttonText,
    children,
    className,
    countThreshold,
    width,
    currency,
    currencySymbol,
    error,
    errorMessage,
    hasButton = false,
    hintText,
    id,
    label,
    maxlength,
    name,
    onBlur,
    onChange,
    placeholder,
    type = 'text',
    value,
    ...props
}) => {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const ref = useRef(null);
    const inputWrapperClasses = `${hasButton ? 'ds_input__wrapper  ds_input__wrapper--has-icon' : ''} ${currency ? 'ds_currency-wrapper' : ''}`;
    const describedbys: string[] = [];

    if (hintText) { describedbys.push(hintTextId) };
    if (errorMessage) { describedbys.push(errorMessageId) };

    useEffect(() => {
        if (ref.current) {
            new DSCharacterCount(ref.current).init();
        }
    }, [ref]);

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
        <ConditionalWrapper
            condition={typeof maxlength !== 'undefined' && maxlength > 0}
            wrapper={(children: React.JSX.Element) => <div ref={ref} data-threshold={countThreshold} data-module="ds-character-count">{children}</div>}
        >
            <label className="ds_label" htmlFor={id}>{label}</label>
            {hintText && <HintText id={hintTextId} text={hintText} />}
            {errorMessage && <ErrorMessage id={errorMessageId} text={errorMessage}/>}
            <ConditionalWrapper
                condition={hasButton || typeof currency !== 'undefined' && currency}
                wrapper={(children: React.JSX.Element) => <div className={inputWrapperClasses} data-symbol={currencySymbol}>{children}</div>}
            >
                <input
                    aria-describedby={describedbys.join(' ')}
                    aria-invalid={error}
                    className={[
                        'ds_input',
                        className,
                        error ? 'ds_input--error' : '',
                        width ? `ds_input--${width}` : '',
                    ].join(' ')}
                    defaultValue={value}
                    id={id}
                    maxLength={maxlength}
                    name={name || id}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={placeholder}
                    type={type}
                    {...props}
                />
                {hasButton && (buttonText || buttonIcon) && <Button iconOnly icon={buttonIcon}>{buttonText}</Button>}
            </ConditionalWrapper>
        </ConditionalWrapper>
    );
};

TextInput.displayName = 'TextInput';

export default TextInput;
