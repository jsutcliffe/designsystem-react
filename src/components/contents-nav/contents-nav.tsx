import WrapperTag from '../../common/wrapper-tag';

/**
 * @param {Object} props - Properties for the element
 * @param {boolean} props.current
 * @param {string} props.href
 * @returns {JSX.Element} - The element
 */
export const ContentsLink: React.FC<SGDS.Component.ContentsNav.Link> = ({
    children,
    current,
    href,
    ...props
}) => {
    // determine which HTML tag to use
    const tagName = href && !current ? 'a' : 'span';

    return (
        <li
            aria-current={current && 'page' || false}
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
 * @param {string} props.label
 * @param {string} [props.title='Contents']
 * @returns {JSX.Element} - The element
 */
const ContentsNav: React.FC<SGDS.Component.ContentsNav> = function({
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
