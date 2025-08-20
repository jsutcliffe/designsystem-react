import React from 'react';
import { CheckboxRadioContext } from '../../utils/context';

const RadioGroup = ({
    children,
    className,
    inline,
    name,
    small = false,
    ...props
}: SGDS.Component.RadioButton.Group) => {
    return (
        <div
            className={[
                'ds_radios',
                'ds_field-group',
                inline && 'ds_field-group--inline',
                className
            ].join(' ')}
            {...props}
        >
            <CheckboxRadioContext value={{ small, name }}>
                {children}
            </CheckboxRadioContext>
        </div>
    );
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
