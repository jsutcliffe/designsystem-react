"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const Item = ({ children, isCurrent = false, href, linkComponent }) => {
    const classNames = ['ds_site-navigation__link'];
    let ariaCurrent;
    if (isCurrent) {
        classNames.push('ds_current');
        ariaCurrent = 'page';
    }
    const classNamesString = (0, clsx_1.default)(classNames);
    function processChildren(children) {
        if (linkComponent) {
            return linkComponent({ className: classNamesString, href, children });
        }
        else if (href) {
            return <a href={href} aria-current={ariaCurrent ? ariaCurrent : undefined} className={classNamesString}>{children}</a>;
        }
        else {
            return <span className={classNamesString}>{children}</span>;
        }
    }
    return (<li className="ds_site-navigation__item">
            {processChildren(children)}
        </li>);
};
const SiteNavigation = ({ children, className, ...props }) => {
    return (<nav className={(0, clsx_1.default)([
            'ds_site-navigation',
            className
        ])} {...props}>
            <ul className="ds_site-navigation__list">
                {children}
            </ul>
        </nav>);
};
SiteNavigation.displayName = 'SiteNavigation';
SiteNavigation.Item = Item;
Item.displayName = 'SiteNavigation.Item';
exports.default = SiteNavigation;
