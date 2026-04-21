"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const ContentsNavItem = ({ children, isCurrent, href, linkComponent }) => {
    const classNames = ['ds_contents-nav__link'];
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
            return <span aria-current={ariaCurrent ? ariaCurrent : undefined} className={classNamesString}>{children}</span>;
        }
    }
    return (<li className="ds_contents-nav__item">
            {processChildren(children)}
        </li>);
};
const ContentsNav = ({ ariaLabel = 'Pages in this section', children, className, title = 'Contents', ...props }) => {
    return (<nav aria-label={ariaLabel} className={(0, clsx_1.default)([
            'ds_contents-nav',
            className
        ])} {...props}>
            <h2 className="ds_contents-nav__title">{title}</h2>

            <ul className="ds_contents-nav__list">
                {children}
            </ul>
        </nav>);
};
ContentsNav.displayName = 'ContentsNav';
ContentsNavItem.displayName = 'ContentsNav.Item';
ContentsNav.Item = ContentsNavItem;
exports.default = ContentsNav;
