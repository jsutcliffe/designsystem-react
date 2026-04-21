"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const Details = ({ children, className, summary, ...props }) => {
    return (<details className={(0, clsx_1.default)([
            "ds_details",
            className
        ])} {...props}>
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
