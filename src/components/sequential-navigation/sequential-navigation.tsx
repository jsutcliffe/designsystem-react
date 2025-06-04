/**
 * @param {Object} props - Properties for the element
 * @param {string} props.href - URL of the link
 * @param {string} props.title - Text of the link
 * @returns {JSX.Element} - The element
 */
export const NextLink: React.FC<SGDS.Component.SequentialNavigation.Link> = ({
    href,
    title,
    ...props
}) => {
    return (
        <div
            className="ds_sequential-nav__item  ds_sequential-nav__item--next"
            {...props}
        >
            <a href={href} className="ds_sequential-nav__button  ds_sequential-nav__button--right">
                <span className="ds_sequential-nav__text" data-label="Next">
                    {title}
                </span>
            </a>
        </div>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @param {string} props.href - URL of the link
 * @param {string} props.title - Text of the link
 * @returns {JSX.Element} - The element
 */
export const PrevLink: React.FC<SGDS.Component.SequentialNavigation.Link> = ({
    href,
    title,
    ...props
}) => {
    return (
        <div
            className="ds_sequential-nav__item  ds_sequential-nav__item--prev"
            {...props}
        >
            <a href={href} className="ds_sequential-nav__button  ds_sequential-nav__button--left">
                <span className="ds_sequential-nav__text" data-label="Previous">
                    {title}
                </span>
            </a>
        </div>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SequentialNavigation: React.FC<SGDS.Component.SequentialNavigation> = ({
    children,
    ...props
}) => {
    return (
        <nav
            className="ds_sequential-nav"
            aria-label="Article navigatio"
            {...props}
        >
            {children}
        </nav>
    );
};

export default SequentialNavigation;
