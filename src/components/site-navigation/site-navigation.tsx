/**
 * @param {Object} props - Properties for the element
 * @param {boolean} [props.current=false]
 * @param {string} props.href - URL of the link
 * @param {string} props.title - Text of the link
 * @returns {JSX.Element} - The element
 */
export const SiteNavLink: React.FC<SGDS.Component.SiteNavigation.Link> = ({
    current=false,
    href,
    title,
    ...props
}) => {
    return (
        <li
            className="ds_site-navigation__item"
            {...props}
        >
            <a
                href={href}
                className={[
                    'ds_site-navigation__link',
                    current && 'ds_current'
                ].join(' ')}>{title}</a>
        </li>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteNavigation: React.FC<SGDS.Component.SiteNavigation> = ({
    children,
    ...props
}) => {

    return (
        <nav
            className="ds_site-navigation"
            {...props}
        >
            <ul className="ds_site-navigation__list">
                {children}
            </ul>
        </nav>
    );
};

export default SiteNavigation;
