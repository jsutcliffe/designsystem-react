import React, { isValidElement, Children, useEffect, useRef } from 'react';
import WrapperTag from '../../common/wrapper-tag';
// @ts-ignore
import DSTabs from '@scottish-government/design-system/src/components/tabs/tabs';
import slugify from '../../utils/slugify';

const TabItem: React.FC<SGDS.Component.Tabs.Item> = ({
    bordered,
    children,
    className,
    id,
    tabLabel,
    ...props
}) => {
    return (
        <div
            className={[
                'ds_tabs__content',
                bordered && 'ds_tabs__content--bordered',
                className
            ].join(' ')}
            id={id}
            {...props}
        >
            {children}
        </div>
    );
};

const TabListItem: React.FC<SGDS.Component.Tabs.TabListItem> = ({
    title,
    href
}) => {
    return (
        <li className="ds_tabs__tab">
            <a className="ds_tabs__tab-link" href={href}>{title}</a>
        </li>
    );
}

const Tabs: React.FC<SGDS.Component.Tabs>
    & { Item: React.FC<SGDS.Component.Tabs.Item> } = ({
    baseId = 'tabs',
    bordered = true,
    children,
    className,
    headerLevel = 'h2',
    manual = false,
    title = 'Contents',
    ...props
}) => {
    const ref = useRef(null);

    const headingId = `${baseId}-heading`;

    useEffect(() => {
        if (ref.current) {
            new DSTabs(ref.current).init();
        }
    }, [ref]);

    const processedItems = Children.map(children, child => {
        if (isValidElement(child) && child.type === TabItem) {
            let thisChild = child as React.ReactElement<SGDS.Component.Tabs.Item>;

            return React.cloneElement(thisChild as React.ReactElement<SGDS.Component.Tabs.Item>, {
                bordered: bordered,
                id: thisChild.props.id || `${baseId}-${slugify(thisChild.props.tabLabel)}`,
            });
        }
    });

    const tabListItems = Children.map(processedItems, child => {
        if (isValidElement(child) && child.type === TabItem) {
            return React.createElement(TabListItem, { title: child.props.tabLabel, href: `#${child.props.id}` });
        }
    });

    return (
        <div
            className={[
                'ds_tabs',
                manual && 'ds_tabs--manual',
                className
            ].join(' ')}
            ref={ref}
            {...props}
        >
            <WrapperTag
                id={headingId}
                className="ds_tabs__title"
                tagName={headerLevel}
            >
                {title}
            </WrapperTag>

            <ul className="ds_tabs__list" aria-labelledby={headingId}>
                {tabListItems}
            </ul>

            {processedItems}
        </div>
    );
};

Tabs.displayName = 'Tabs';
TabItem.displayName = 'Tabs.Item';
Tabs.Item = TabItem;

export default Tabs;
