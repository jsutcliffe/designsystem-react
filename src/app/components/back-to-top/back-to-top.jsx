import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DSBackToTop from '../../../../node_modules/@scottish-government/design-system/src/components/back-to-top/back-to-top';
import Icon from '../common/icon';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const BackToTop = function({
    href = '#page-top',
    ...props
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSBackToTop(ref.current).init();
        }
    }, [ref]);

    return (
        <div
            className='ds_back-to-top'
            {...props}
        >
            <a href={href} className="ds_back-to-top__button">Back to top
                <Icon icon="arrow_upward"/>
            </a>
       </div>
    );
};
BackToTop.propTypes = {
    href: PropTypes.string
};

export default BackToTop;
