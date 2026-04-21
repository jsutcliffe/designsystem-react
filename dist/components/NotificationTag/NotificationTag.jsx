"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const NotificationTag = ({ children, className, description, isHidden, label, ...props }) => {
    return (<span className="ds_notification-tag__wrapper">
            {children}
            <span aria-hidden={isHidden ? "true" : undefined} className={(0, clsx_1.default)([
            'ds_notification-tag',
            !label && 'ds_notification-tag--dot',
            className
        ])} {...props}>
                {label} {description && <span className="visually-hidden">{description}</span>}
            </span>
        </span>);
};
NotificationTag.displayName = 'NotificationTag';
exports.default = NotificationTag;
