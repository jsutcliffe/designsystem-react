import { useEffect, useRef } from 'react';
// @ts-ignore
import DSSideNavigation from '@scottish-government/design-system/src/components/side-navigation/side-navigation';

export const List: React.FC<SGDS.Component.SideNavigation.List> = function ({
    items,
    root
}) {
    return (
        <ul className="ds_side-navigation__list"
            id={root ? 'side-navigation-root' : undefined }
        >
            {items && items.map((item, index: number) => (
                <Link
                    title={item.title}
                    href={item.href}
                    items={item.items}
                    current={item.current}
                    key={'sidenavitem' + index}
                />
            ))}
        </ul>
    );
};

export const Link: React.FC<SGDS.Component.SideNavigation.Link> = function ({
    current = false,
    href,
    items,
    title
}) {
    return (
        <li
            className={[
                'ds_side-navigation__item',
                items && 'ds_side-navigation__item--has-children'
            ].join(' ')}
        >
            {current ?
                <span className="ds_side-navigation__link  ds_current">{title}</span> :
                <a href={href} className="ds_side-navigation__link">{title}</a>
            }

            {items && <List items={items} />}
        </li>
    );
};

const SideNavigation: React.FC<SGDS.Component.SideNavigation> = function ({
    children,
    className,
    items,
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
            className={[
                'ds_side-navigation',
                className
            ].join(' ')}
            data-module="ds-side-navigation"
            ref={ref}
            {...props}
        >
            <input type="checkbox" className="fully-hidden  js-toggle-side-navigation" id="show-side-navigation" aria-controls="side-navigation-root" />
            <label className="ds_side-navigation__expand  ds_link" htmlFor="show-side-navigation">
                <span className="visually-hidden">Show all</span> Pages in this section
                <span className="ds_side-navigation__expand-indicator"></span>
            </label>

            {items && <List root items={items} />}
        </nav>
    );
};

SideNavigation.displayName = 'SideNavigation';
Link.displayName = 'SideNavLink';
List.displayName = 'SideNavList';

export default SideNavigation;
