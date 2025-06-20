import { useEffect, useRef } from 'react';
// @ts-ignore
import DSCharacterCount from '@scottish-government/design-system/src/forms/character-count/character-count';
import ConditionalWrapper from '../../common/conditional-wrapper';
import ErrorMessage from '../error-message/error-message';
import HintText from '../../common/hint-text';

const Textarea: React.FC<SGDS.Component.Textarea> = ({
    className,
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

            <textarea
                aria-describedby={describedbys.join(' ')}
                aria-invalid={error}
                className={[
                    'ds_input',
                    error && 'ds_input--error',
                    className
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

Textarea.displayName = 'Textarea';

export default Textarea;
