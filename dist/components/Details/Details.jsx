"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Details = ({ children, className, summary, ...props }) => {
    return (<details className={[
            "ds_details",
            className
        ].join(' ')} {...props}>
            <summary className="ds_details__summary">
                {summary}
            </summary>
            <div className="ds_details__text">
                {children}
            </div>
        </details>);
};
Details.displayName = 'Details';
exports.default = Details;
