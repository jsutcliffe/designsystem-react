const SiteNavLink: React.FC<SGDS.Component.SiteNavigation.Link> = ({
    current=false,
    href,
    title
}) => {
    return (
        <li
            className="ds_site-navigation__item"
        >
            <a
                href={href}
                className={[
                    'ds_site-navigation__link',
                    current ? 'ds_current' : undefined
                ].join(' ')}>{title}</a>
        </li>
    );
};

const SiteNavigation: React.FC<SGDS.Component.SiteNavigation> = ({
    items,
    ...props
}) => {
    return (
        <nav
            className="ds_site-navigation"
            {...props}
        >
            <ul className="ds_site-navigation__list">
                {items && items.map((item, index: number) => (
                    <SiteNavLink current={item.current} href={item.href} title={item.title} key={`link-${index}`} />
                ))}
            </ul>
        </nav>
    );
};

SiteNavigation.displayName = 'SiteNavigation';

export default SiteNavigation;
