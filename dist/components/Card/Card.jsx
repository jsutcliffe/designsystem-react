"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConditionalWrapper_1 = __importDefault(require("../../common/ConditionalWrapper"));
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
const AspectBox_1 = __importDefault(require("../AspectBox"));
const PageMetadata_1 = __importDefault(require("../PageMetadata"));
const Tag_1 = __importDefault(require("../Tag"));
const clsx_1 = __importDefault(require("clsx"));
const CardSettingsContext = (0, react_1.createContext)({
    headingLevel: 'h2',
    href: undefined,
    linkComponent: undefined
});
const CardContent = ({ children }) => {
    return (<div className="ds_card__content">
            {children}
        </div>);
};
const CardContentHeader = ({ children, description, title }) => {
    const headingLevel = (0, react_1.useContext)(CardSettingsContext).headingLevel;
    const href = (0, react_1.useContext)(CardSettingsContext).href;
    const linkComponent = (0, react_1.useContext)(CardSettingsContext).linkComponent;
    const LINK_CLASS = 'ds_card__link  ds_card__link--cover';
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
    return (<div className="ds_card__content-header">
            {children}
            <WrapperTag_1.default className="ds_card__title" tagName={headingLevel}>
                <ConditionalWrapper_1.default condition={typeof href !== 'undefined'} wrapper={(children) => getLinkElement(children)}>
                    {title}
                    {description && <span className="visually-hidden">, {description}</span>}
                </ConditionalWrapper_1.default>
            </WrapperTag_1.default>
        </div>);
};
const CardStatusTag = ({ children, colour, isHidden, ...props }) => {
    return (<Tag_1.default aria-hidden={isHidden ? "true" : undefined} colour={colour} {...props}>
            {children}
        </Tag_1.default>);
};
const CardContentMain = ({ children }) => {
    return (<div className="ds_card__content-main">
            {children}
        </div>);
};
const CardContentFooter = ({ children }) => {
    return (<div className="ds_card__content-footer">
            {children}
        </div>);
};
const CardMetadata = ({ children }) => {
    return (<PageMetadata_1.default isInline>
            {children}
        </PageMetadata_1.default>);
};
const CardMedia = ({ children, isCover, mediaWidth, ratio, ...props }) => {
    return (<div className={(0, clsx_1.default)([
            'ds_card__media',
            isCover && ratio && 'ds_card__media--cover',
            (mediaWidth && (mediaWidth === 'narrow' || mediaWidth === 'wide')) && 'ds_card__media--' + mediaWidth
        ])} {...props}>
            <ConditionalWrapper_1.default condition={ratio !== undefined} wrapper={(children) => <AspectBox_1.default ratio={ratio}>
                {children}
            </AspectBox_1.default>}>
                {children}
            </ConditionalWrapper_1.default>
        </div>);
};
const Card = ({ children, className, hasSecondaryBackground = false, headingLevel, href, isAdaptive = false, isHorizontal = false, isHorizontalSmall = false, linkComponent, tagName = 'div', ...props }) => {
    return (<CardSettingsContext value={{
            headingLevel: headingLevel || 'h2',
            href: href,
            linkComponent: linkComponent
        }}>
            <ConditionalWrapper_1.default condition={isAdaptive} wrapper={(children) => <div className="ds_card-container">
                    {children}
                </div>}>
                <WrapperTag_1.default tagName={tagName} className={(0, clsx_1.default)([
            'ds_card',
            href && 'ds_card--navigation',
            hasSecondaryBackground && 'ds_card--background-secondary',
            isHorizontal && 'ds_card--horizontal',
            isHorizontalSmall && 'ds_card--horizontal-small',
            className
        ])} {...props}>
                    {children}
                </WrapperTag_1.default>
            </ConditionalWrapper_1.default>
        </CardSettingsContext>);
};
Card.Content = CardContent;
Card.ContentFooter = CardContentFooter;
Card.ContentHeader = CardContentHeader;
Card.ContentMain = CardContentMain;
Card.Metadata = CardMetadata;
Card.Media = CardMedia;
Card.StatusTag = CardStatusTag;
Card.displayName = 'Card';
CardContent.displayName = 'Card.Content';
CardContentFooter.displayName = 'Card.ContentFooter';
CardContentHeader.displayName = 'Card.ContentHeader';
CardContentMain.displayName = 'Card.ContentMain';
CardMetadata.displayName = 'Card.Metadata';
CardMedia.displayName = 'Card.Media';
CardStatusTag.displayName = 'Card.StatusTag';
exports.default = Card;
