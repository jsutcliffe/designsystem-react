import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DSCharacterCount from '@scottish-government/design-system/src/forms/character-count/character-count';
import Button from '../button/button';
import ConditionalWrapper from '../common/conditional-wrapper';
import ErrorMessage from '../error-message/error-message';
import HintText from '../common/hint-text';
import '../../typedefs';

/**
 * @param {Object} props - Properties for the element
 * @param {string} [props.buttonIcon] - Icon to use
 * @param {string} [props.buttonText] - Screen reader text for button
 * @param {string} [props.className] - Additional CSS class(es)
 * @param {number} [props.countThreshold] - PCharacter count threshold
 * @param {boolean} [props.currency] - Input is a currency field
 * @param {string} [props.currencySymbol] - Currency symbol to use
 * @param {boolean} [props.error] - Input is in error
 * @param {string} [props.errorMessage] - Error text
 * @param {boolean} [props.hasButton] - Input has a button
 * @param {string} [props.hintText] - Hint text
 * @param {string} props.id - Input id attribute
 * @param {string} props.label - Label text
 * @param {number} [props.maxlength] - Max characters permitted
 * @param {string} [props.name] - Input name attribute
 * @param {function} [props.onBlur] - Function to fire in response to a blur event
 * @param {function} [props.onChange] - Function to fire in response to a change event
 * @param {string} [props.placeholder] - Input placeholder attribute
 * @param {string} [props.type='text'] - Input type attribute
 * @param {string} [props.value] - Default value
 * @param {InputWidth} [props.width] - Width CSS class
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
