"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
const Link = ({ current, href, title }) => {
    // determine which HTML tag to use
    const tagName = href && !current ? 'a' : 'span';
    return (<li aria-current={current && 'page' || undefined} className="ds_contents-nav__item">
            <WrapperTag_1.default tagName={tagName} className={[
            'ds_contents-nav__link',
            current && 'ds_current'
        ].join(' ')} href={!current ? href : undefined}>
                {title}
            </WrapperTag_1.default>
        </li>);
};
exports.Link = Link;
const ContentsNav = function ({ className, items, label = 'Pages in this section', title = 'Contents', ...props }) {
    return (<nav aria-label={label} className={[
            'ds_contents-nav',
            className
        ].join(' ')} {...props}>
            <h2 className="ds_contents-nav__title">{title}</h2>
            <ul className="ds_contents-nav__list">
                {items && items.map((item, index) => (<exports.Link current={item.current} href={item.href} title={item.title} key={'link' + index}/>))}
            </ul>
        </nav>);
};
ContentsNav.displayName = 'ContentsNav';
exports.default = ContentsNav;
