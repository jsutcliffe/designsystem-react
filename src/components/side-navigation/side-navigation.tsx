import { useEffect, useRef } from 'react';
// @ts-ignore
import DSSideNavigation from '@scottish-government/design-system/src/components/side-navigation/side-navigation';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SideNavItems: React.FC<SGDS.Component.SideNavigation.List> = function ({
    children,
    ...props
}) {
    return (
        <ul
            className="ds_side-navigation__list"
            {...props}
        >
            {children}
        </ul>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @param {boolean} [props.current=false]
 * @param {string} props.href - URL of the link
 * @param {string} props.title - Text of the link
 * @returns {JSX.Element} - The element
 */
export const SideNavLink: React.FC<SGDS.Component.SideNavigation.Link> = function ({
    children,
    current = false,
    href,
    title,
    ...props
}) {
    return (
        <li
            className="ds_side-navigation__item  ds_side-navigation__item--has-children"
            {...props}
        >
            {current ?
                <span className="ds_side-navigation__link  ds_current">{title}</span> :
                <a href={href} className="ds_side-navigation__link">{title}</a>
            }

            {children}
        </li>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SideNavigation: React.FC<SGDS.Component.SideNavigation> = function ({
    children,
    ...props
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSSideNavigation(ref.current).init();
        }
    }, [ref]);

    return (
        <nav
            aria-label="Sections"
            className="ds_side-navigation"
            data-module="ds-side-navigation"
            {...props}
        >
            <input type="checkbox" className="fully-hidden  js-toggle-side-navigation" id="show-side-navigation" aria-controls="side-navigation-root" />
            <label className="ds_side-navigation__expand  ds_link" htmlFor="show-side-navigation">
                <span className="visually-hidden">Show all</span> Pages in this section
                <span className="ds_side-navigation__expand-indicator"></span>
            </label>

            {children}
        </nav>
    );
};

export default SideNavigation;
