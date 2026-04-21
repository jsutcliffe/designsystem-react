"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
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
    return (<li className={(0, clsx_1.default)([
            'ds_breadcrumbs__item',
            isHidden && 'visually-hidden'
        ])} {...props}>
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
