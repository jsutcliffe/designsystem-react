import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DSCharacterCount from '../../../../node_modules/@scottish-government/design-system/src/forms/character-count/character-count';
import ConditionalWrapper from '../common/conditional-wrapper';
import ErrorMessage from '../error-message/error-message';
import HintText from '../common/hint-text';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TextInput = function ({
    button,
    children,
    className,
    countThreshold,
    currency,
    currencySymbol,
    error,
    errorMessage,
    hintText,
    id,
    label,
    maxlength,
    name,
    placeholder,
    type = 'text',
    value,
    width,
    ...props
}) {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const ref = useRef(null);

    const inputWrapperClasses = `ds_input__wrapper ${button ? 'ds_input__wrapper--has-icon' : ''} ${currency ? 'ds_currency-wrapper' : ''}`;

    useEffect(() => {
        if (ref.current) {
            new DSCharacterCount(ref.current).init();
        }
    }, [ref]);

    return (
        <ConditionalWrapper
            condition={maxlength}
            wrapper={children => <div ref={ref} data-threshold={countThreshold} data-module="ds-character-count">{children}</div>}
        >
            <label className="ds_label" htmlFor={id} aria-describedby={hintTextId}>{label}</label>
            {hintText && <HintText id={hintTextId} text={hintText} />}
            {errorMessage && <ErrorMessage id={errorMessageId} text={errorMessage}/>}
            <ConditionalWrapper
                condition={button || currency}
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
                    placeholder={placeholder}
                    type={type}
                    {...props}
                />
                {children}
            </ConditionalWrapper>

        </ConditionalWrapper>
    );
};
TextInput.propTypes = {
    button: PropTypes.bool,
    children: PropTypes.element,
    className: PropTypes.string,
    countThreshold: PropTypes.string,
    currency: PropTypes.bool,
    currencySymbol: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    id: PropTypes.string.isRequired,
    hintText: PropTypes.string,
    label: PropTypes.string.isRequired,
    maxlength: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.string
};

export default TextInput;
