"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.Action = exports.Answer = void 0;
const ConditionalWrapper_1 = __importDefault(require("../../common/ConditionalWrapper"));
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
function escapedNewLineToLineBreakTag(string) {
    if (typeof string === 'string') {
        // @ts-ignore
        return string.split('\n').map((item, index) => {
            return (index === 0) ? item : [<br key={index}/>, item];
        });
    }
}
function convertToSlug(string) {
    return string.toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
}
const Answer = ({ value }) => {
    const processedValue = escapedNewLineToLineBreakTag(value.toString());
    return (<q className="ds_summary-list__answer">{processedValue}</q>);
};
exports.Answer = Answer;
const Action = ({ describedby, href, onclick, title, }) => {
    let tagName = 'button';
    if (href) {
        tagName = 'a';
    }
    return (<WrapperTag_1.default aria-describedby={describedby} className="ds_link" href={href} onClick={onclick} tagName={tagName} type={tagName === 'button' ? 'button' : undefined}>
            {title}
        </WrapperTag_1.default>);
};
exports.Action = Action;
const Item = ({ actions, index = 1, title, value }) => {
    let values = [];
    if (Array.isArray(value)) {
        values = value;
    }
    else {
        values = [value || ''];
    }
    const describedById = `q${index + 1}-${convertToSlug(title)}`;
    return (<li className="ds_summary-list__item">
            <span className="ds_summary-list__key" id={describedById}>{title}</span>
            <span className="ds_summary-list__value">
                <ConditionalWrapper_1.default condition={values.length > 1} wrapper={(children) => <ul className="ds_no-bullets">{children}</ul>}>
                    {values && values.map((value, index) => (<ConditionalWrapper_1.default condition={values.length > 1} wrapper={(children) => <li>{children}</li>} key={'answer' + index}>
                            <exports.Answer value={value}/>
                        </ConditionalWrapper_1.default>))}
                </ConditionalWrapper_1.default>
            </span>
            {actions &&
            <div className="ds_summary-list__actions">
                    {actions && actions.map((action, index) => (<exports.Action describedby={describedById} href={action.href} onclick={action.onclick} title={action.title} key={'summarylistaction' + index}/>))}
                </div>}
        </li>);
};
exports.Item = Item;
const SummaryList = ({ className, items, noBorder, ...props }) => {
    return (<ol className={[
            'ds_summary-list',
            noBorder && 'ds_summary-list--no-border',
            className
        ].join(' ')} {...props}>
            {items && items.map((item, index) => (<exports.Item actions={item.actions} title={item.title} value={item.value} index={index} key={'summarylistitem' + index}/>))}
        </ol>);
};
SummaryList.displayName = 'SummaryList';
exports.Action.displayName = 'SummaryListAction';
exports.Answer.displayName = 'SumaryListAnswer';
exports.Item.displayName = 'SummaryListItem';
exports.default = SummaryList;
