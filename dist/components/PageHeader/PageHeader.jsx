"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const PageHeader = ({ children, className, label, title, titleId, ...props }) => {
    return (<header className={(0, clsx_1.default)([
            'ds_page-header',
            className
        ])} {...props}>
            {label && <span className="ds_page-header__label  ds_content-label">{label}</span>}
            <h1 id={titleId} className="ds_page-header__title">{title}</h1>

            {children}
        </header>);
};
PageHeader.displayName = 'PageHeader';
exports.default = PageHeader;
