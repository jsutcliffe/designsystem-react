import React from 'react';
import WrapperTag from '../common/wrapper-tag';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ContentsLink = function ({
    children,
    current,
    href,
    ...props
}) {
    // determine which HTML tag to use
    const tagName = href && !current ? 'a' : 'span';

    return (
        <li
            aria-current={current && 'page'}
            className="ds_contents-nav__item"
            {...props}
        >
            <WrapperTag
                tagName={tagName}
                className={[
                    'ds_contents-nav__link',
                    current && 'ds_current'
                ].join(' ')}
                href={!current ? href : undefined}
            >
                {children}
            </WrapperTag>
        </li>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ContentsNav = function({
    children,
    label,
    title = 'Contents',
    ...props
}) {
    return (
        <nav
            aria-label={label}
            className="ds_contents-nav"
            {...props}
        >
            <h2 className="ds_contents-nav__title">{title}</h2>
            <ul className="ds_contents-nav__list">
                {children}
            </ul>
        </nav>
    );
};

export default ContentsNav;
