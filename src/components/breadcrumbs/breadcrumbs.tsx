const Breadcrumb: React.FC<SGDS.Component.Breadcrumbs.Item> = ({
    hidden,
    href,
    title
}) => {
    return (
        <li
            className={[
                'ds_breadcrumbs__item',
                hidden && 'visually-hidden'
            ].join(' ')}
        >

            {href ? (<a className="ds_breadcrumbs__link" href={href}>
                {title}
            </a>) : (title)}
        </li>
    );
};

/**
 * @param {boolean} hideLastItem
 * @param {Array} items
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Breadcrumbs: React.FC<SGDS.Component.Breadcrumbs> = ({
    className,
    hideLastItem,
    items,
    ...props
}) => {
    return (
        <nav
            aria-label="Breadcrumb"
            className={className}
            {...props}
        >
            <ol className="ds_breadcrumbs">
                {items && items.map((item, index: number) => (
                    <Breadcrumb
                        title={item.title}
                        href={item.href}
                        hidden={(hideLastItem) && index + 1 === items.length}
                        key={'breadcrumb' + index}
                    />
                ))}
            </ol>
        </nav>
    );
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
