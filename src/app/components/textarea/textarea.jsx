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
const Textarea = function ({
    countThreshold,
    error,
    errorMessage,
    hintText,
    id,
    label,
    maxlength,
    name,
    placeholder,
    rows,
    value,
    ...props
}) {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSCharacterCount(ref.current).init();
        }
    }, [ref]);

    return (
        <ConditionalWrapper
            condition={maxlength}
            wrapper={children => <div ref={ref} data-module="ds-character-count">{children}</div>}
        >
            <label className="ds_label" htmlFor={id} aria-describedby={hintTextId}>{label}</label>
            {hintText && <HintText id={hintTextId} text={hintText} />}
            {errorMessage && <ErrorMessage id={errorMessageId} text={errorMessage}/>}

            <textarea
                aria-describedby={`${errorMessageId} ${hintTextId}`}
                className={[
                    'ds_input',
                    error && 'ds_input--error',
                ].join(' ')}
                defaultValue={value}
                id={id}
                maxLength={maxlength}
                name={name || id}
                placeholder={placeholder}
                rows={rows}
                {...props}
            ></textarea>

        </ConditionalWrapper>
    );
};
Textarea.propTypes = {
    countThreshold: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    id: PropTypes.string.isRequired,
    hintText: PropTypes.string,
    label: PropTypes.string.isRequired,
    maxlength: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.string,
    value: PropTypes.string
}

export default Textarea;
