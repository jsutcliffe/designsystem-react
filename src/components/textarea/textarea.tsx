import { useEffect, useRef } from 'react';
// @ts-ignore
import DSCharacterCount from '@scottish-government/design-system/src/forms/character-count/character-count';
import ConditionalWrapper from '../../common/conditional-wrapper';
import ErrorMessage from '../error-message/error-message';
import HintText from '../../common/hint-text';

/**
 * @param {Object} props - Properties for the element
 * @param {number} [props.countThreshold] - Character count threshold
 * @param {boolean} [props.error] - Textarea is in error
 * @param {string} [props.errorMessage] - Error message text
 * @param {string} [props.hintText] - Hint text
 * @param {string} props.id - Textarea id attribute
 * @param {string} props.label - Label text
 * @param {number} [props.maxlength] - Max characters permitted
 * @param {string} [props.name] - Textarea name attribute
 * @param {function} [props.onBlur] - Function to fire in response to a blur event
 * @param {function} [props.onChange] - Function to fire in response to a change event
 * @param {string} [props.placeholder] - Textarea placeholder attribute
 * @param {number} [props.rows='4'] - Textarea rows attribute
 * @param {string} [props.value] - Default value/content
 * @returns {JSX.Element} - The element
 */
const Textarea: React.FC<SGDS.Component.Textarea> = ({
    children,
    countThreshold,
    error,
    errorMessage,
    hintText,
    id,
    label,
    maxlength,
    name,
    onBlur,
    onChange,
    placeholder,
    rows = 4,
    value,
    ...props
}) => {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const ref = useRef(null);

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
            wrapper={(children: React.JSX.Element) => <div ref={ref} data-module="ds-character-count">{children}</div>}
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
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={placeholder}
                rows={rows}
                {...props}
            />

        </ConditionalWrapper>
    );
};

export default Textarea;
