import React, { Children } from 'react';
import PropTypes from 'prop-types';
import HintText from '../common/hint-text';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const RadioGroup = function ({
    children,
    inline,
    name,
    ...props
}) {
    // pass {name} to child radio buttons
    children = Children.map(children, child =>
        React.cloneElement(child, { name: name })
    );

    return (
        <div
            className={[
                'ds_radios',
                'ds_field-group',
                inline && 'ds_field-group--inline'
            ].join(' ')}
            {...props}
        >
            {children}
        </div>
    )
};
RadioGroup.propTypes = {
    children: PropTypes.element.isRequired,
    inline: PropTypes.bool,
    name: PropTypes.string
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Radio = function ({
    checked,
    hintText,
    id,
    label,
    name,
    small
}) {
    const hintTextId = `hint-text-${id}`;

    return (
        <div
            className={[
                'ds_radio',
                small && 'ds_radio--small'
            ].join(' ')}>
            <input defaultChecked={!!checked} className="ds_radio__input" id={id} name={name} type="radio" />
            <label className="ds_radio__label" htmlFor={id} aria-describedby={hintTextId}>{label}</label>
            {hintText && <HintText id={hintTextId} text={hintText} />}
        </div>
    );
};
RadioGroup.propTypes = {
    checked: PropTypes.bool,
    hintText: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    small: PropTypes.bool
};

export default Radio;
