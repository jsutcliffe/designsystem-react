import React from 'react';
import * as Icons from '../icons';

const Icon: React.FC<SGDS.Common.Icon> = ({
    ariaLabel,
    className,
    fill,
    icon,
    iconSize
}) => {
    const Component = React.createElement(Icons[icon],
        {
            'aria-hidden': ariaLabel ? undefined : true,
            'aria-label': ariaLabel,
            className: [
                'ds_icon',
                className,
                fill && 'ds_icon--fill',
                iconSize && `ds_icon--${iconSize}`
            ].join(' ')
        }
    );

    return (
        <>
            {Component}
        </>
    );
};

Icon.displayName = 'Icon';

export default Icon;
