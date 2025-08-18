"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ErrorSummaryItem = ({ children, fragmentId, linkComponent }) => {
    const HREF = '#' + fragmentId;
    function processChildren(children) {
        if (linkComponent) {
            return linkComponent({ className: '', href: HREF, children });
        }
        else if (fragmentId) {
            return <a href={HREF}>{children}</a>;
        }
        else {
            return children;
        }
    }
    return (<li>
            {processChildren(children)}
        </li>);
};
const ErrorSummary = ({ children, className, title = 'There is a problem', ...props }) => {
    const summaryTitleId = (0, react_1.useId)();
    return (<div className={[
            'ds_error-summary',
            className
        ].join(' ')} aria-labelledby={summaryTitleId} role="alert" {...props}>
            <h2 className="ds_error-summary__title" id={summaryTitleId}>{title}</h2>

            <ul className="ds_error-summary__list">
                {children}
            </ul>
        </div>);
};
ErrorSummary.displayName = 'ErrorSummary';
ErrorSummaryItem.displayName = 'ErrorSummary.Item';
ErrorSummary.Item = ErrorSummaryItem;
exports.default = ErrorSummary;
