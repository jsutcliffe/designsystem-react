import React, { Children } from 'react';
import RadioButton from './RadioButton';

const RadioGroup = ({
    children,
    className,
    inline,
    name,
    small,
    ...props
}: SGDS.Component.RadioButton.Group) => {
    function processChild(child: any) {
        if (child && child.type === RadioButton) {
            return React.cloneElement(child as React.ReactElement<SGDS.Component.RadioButton>, { small: small, name: name });
        } else {
            return child;
        }
    }

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

            {Children.map(children, child => processChild(child))}
        </div>
    );
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
