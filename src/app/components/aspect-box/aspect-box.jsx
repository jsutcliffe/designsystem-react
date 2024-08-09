import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DSAspectBox from '../../../../node_modules/@scottish-government/design-system/src/components/aspect-box/aspect-box-fallback';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const AspectBox = function({
    children,
    ratio,
    ...props
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSAspectBox(ref.current).init();
        }
    }, [ref]);

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
            {children}
        </div>
    );
};
AspectBox.propTypes = {
    children: PropTypes.element,
    ratio: PropTypes.string
};

export default AspectBox;
