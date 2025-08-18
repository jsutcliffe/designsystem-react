"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BreadcrumbItem = ({ children, isHidden, href, linkComponent, ...props }) => {
    const BREADCRUMB_LINK_CLASSNAME = 'ds_breadcrumbs__link';
    function processChildren(children) {
        if (linkComponent) {
            return linkComponent({ className: BREADCRUMB_LINK_CLASSNAME, href, children });
        }
        else if (href) {
            return <a href={href} className={BREADCRUMB_LINK_CLASSNAME}>{children}</a>;
        }
        else {
            return children;
        }
    }
    return (<li className={[
            'ds_breadcrumbs__item',
            isHidden && 'visually-hidden'
        ].join(' ')} {...props}>
            {processChildren(children)}
        </li>);
};
const Breadcrumbs = ({ children, ...props }) => {
    return (<nav aria-label="Breadcrumb" {...props}>
            <ol className="ds_breadcrumbs">
                {children}
            </ol>
        </nav>);
};
Breadcrumbs.displayName = 'Breadcrumbs';
BreadcrumbItem.displayName = 'Breadcrumbs.Item';
Breadcrumbs.Item = BreadcrumbItem;
exports.default = Breadcrumbs;
