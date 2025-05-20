import { useEffect, useRef } from 'react';
// @ts-ignore
import DSBackToTop from '@scottish-government/design-system/src/components/back-to-top/back-to-top';
import Icon from '../../common/icon';

/**
 * @param {Object} props - Properties for the element
 * @param {string} [props.href='#page-top'] - URL/fragment for the page top element
 * @returns {JSX.Element} - The element
 */
const BackToTop: React.FC<SGDS.Component.BackToTop> = ({
    href = '#page-top',
    ...props
}) => {
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
                <Icon className="ds_back-to-top__icon" icon="arrow_upward"/>
            </a>
       </div>
    );
};

export default BackToTop;
