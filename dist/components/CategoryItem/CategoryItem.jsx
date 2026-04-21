"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionalWrapper_1 = __importDefault(require("../../common/ConditionalWrapper"));
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
const clsx_1 = __importDefault(require("clsx"));
const CategoryItem = ({ children, className, headingLevel = 'h2', href, linkComponent, tagName = 'div', title, ...props }) => {
    const LINK_CLASS = 'ds_category-item__link';
    function getLinkElement(children) {
        let linkElement;
        if (linkComponent) {
            linkElement = linkComponent({ className: LINK_CLASS, href, children });
        }
        else {
            linkElement = <a href={href} className={LINK_CLASS}>{children}</a>;
        }
        return linkElement;
    }
    return (<WrapperTag_1.default tagName={tagName} className={(0, clsx_1.default)([
            'ds_category-item',
            className
        ])} {...props}>
            <WrapperTag_1.default className="ds_category-item__title" tagName={headingLevel}>
                <ConditionalWrapper_1.default condition={typeof href !== 'undefined'} wrapper={(children) => getLinkElement(children)}>
                    {title}
                </ConditionalWrapper_1.default>
            </WrapperTag_1.default>

            {children &&
            <p className="ds_category-item__summary">
                    {children}
                </p>}
        </WrapperTag_1.default>);
};
CategoryItem.displayName = 'CategoryItem';
exports.default = CategoryItem;
