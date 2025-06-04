import React, { Children, useEffect, useRef } from 'react';
// @ts-ignore
import DSAspectBox from '@scottish-government/design-system/src/components/aspect-box/aspect-box-fallback';

/**
 * @param {AspectRatioProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const AspectBox: React.FC<SGDS.Component.AspectBox> = ({
    children,
    ratio,
    ...props
}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSAspectBox(ref.current).init();
        }
    }, [ref]);

    function processChild(child: any) {
        if (['img', 'svg', 'picture'].includes(child.type)) {
            return React.cloneElement(child, { className: 'ds_aspect-box__inner' });
        }
    }

    let ratioClassName;
    switch (ratio) {
        case '1:1':
        case 'square':
            ratioClassName = 'ds_aspect-box--square'
            break;
        case '4:3':
            ratioClassName = 'ds_aspect-box--43'
            break;
        case '21:9':
            ratioClassName = 'ds_aspect-box--219'
            break;
        default:
            ratioClassName = ''
            break;
    }

    return (
        <div
            className={[
                'ds_aspect-box',
                `${ratioClassName}`
            ].join(' ')}
            {...props}
            ref={ref}
        >
            {Children.map(children, child => processChild(child))}
        </div>
    );
};

export default AspectBox;
