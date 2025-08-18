import React, { Children, useEffect, useRef } from 'react';
import Checkbox from './Checkbox';
// @ts-ignore
import DSCheckboxes from '@scottish-government/design-system/src/forms/checkbox/checkboxes'

export const CheckboxGroup = ({
    children,
    className,
    small,
    ...props
}: SGDS.Component.Checkbox.Group) => {
    function processChild(child: any) {
        if (child && child.type === Checkbox) {
            return React.cloneElement(child as React.ReactElement<SGDS.Component.Checkbox>, { small: small });
        } else {
            return child;
        }
    }

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSCheckboxes(ref.current).init();
        }
    }, [ref]);

    return (
        <div
            className={[
                'ds_checkboxes',
                'ds_field-group',
                className
            ].join(' ')}
            data-module="ds-checkboxes"
            ref={ref}
            {...props}
        >
            {Children.map(children, child => processChild(child))}
        </div>
    )
};

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
