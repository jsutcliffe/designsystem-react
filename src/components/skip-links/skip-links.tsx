/**
 * @param {Object} props - Properties for the element
 * @param {string} props.href - URL of the link
 * @param {string} props.title - Text of the link
 * @returns {JSX.Element} - The element
 */
export const SkipLink: React.FC<SGDS.Component.SkipLinks.Link> = ({
    href,
    title,
    ...props
}) => {
    return (
        <li
            className="ds_skip-links__item"
            {...props}
        >
            <a href={href} className="ds_skip-links__link">{ title }</a>
        </li>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @param {string} [props.mainContentId='main-content'] - ID of the main content element
 * @returns {JSX.Element} - The element
 */
const SkipLinks: React.FC<SGDS.Component.SkipLinks> = ({
    children,
    mainContentId = 'main-content',
    ...props
}) => {
    const href = `#${mainContentId}`;

    return (
        <div
            className="ds_skip-links"
            {...props}
        >
            <ul className="ds_skip-links__list">
                <li className="ds_skip-links__item">
                    <a className="ds_skip-links__link" href={href}>Skip to main content</a>
                </li>
                {children}
            </ul>
        </div>
    );
};

export default SkipLinks;
