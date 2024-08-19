import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DSCharacterCount from '../../../../node_modules/@scottish-government/design-system/src/forms/character-count/character-count';
import Button from '../button/button';
import ConditionalWrapper from '../common/conditional-wrapper';
import ErrorMessage from '../error-message/error-message';
import HintText from '../common/hint-text';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TextInput = function ({
    buttonIcon,
    buttonText,
    children,
    className,
    countThreshold,
    currency,
    currencySymbol,
    error,
    errorMessage,
    hasButton,
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
    width,
    ...props
}) {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const ref = useRef(null);

    const inputWrapperClasses = `${hasButton ? 'ds_input__wrapper  ds_input__wrapper--has-icon' : ''} ${currency ? 'ds_currency-wrapper' : ''}`;

    useEffect(() => {
        if (ref.current) {
            new DSCharacterCount(ref.current).init();
        }
    }, [ref]);

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

    return (
        <ConditionalWrapper
            condition={maxlength}
            wrapper={children => <div ref={ref} data-threshold={countThreshold} data-module="ds-character-count">{children}</div>}
        >
            <label className="ds_label" htmlFor={id} aria-describedby={hintTextId}>{label}</label>
            {hintText && <HintText id={hintTextId} text={hintText} />}
            {errorMessage && <ErrorMessage id={errorMessageId} text={errorMessage}/>}
            <ConditionalWrapper
                condition={hasButton || currency}
                wrapper={children => <div className={inputWrapperClasses} data-symbol={currencySymbol}>{children}</div>}
            >
                <input
                    aria-describedby={`${errorMessageId} ${hintTextId}`}
                    className={[
                        'ds_input',
                        className,
                        error && 'ds_input--error',
                        width && `ds_input--${width}`,
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
TextInput.propTypes = {
    buttonIcon: PropTypes.string,
    buttonText: PropTypes.string,
    children: PropTypes.element,
    className: PropTypes.string,
    currency: PropTypes.bool,
    countThreshold: PropTypes.string,
    currencySymbol: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    hasButton: PropTypes.bool,
    id: PropTypes.string.isRequired,
    hintText: PropTypes.string,
    label: PropTypes.string.isRequired,
    maxlength: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.event,
    onChange: PropTypes.event,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.string
};

export default TextInput;
