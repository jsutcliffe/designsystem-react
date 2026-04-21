"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
const clsx_1 = __importDefault(require("clsx"));
const NotificationPanel = function ({ ariaLive, children, className, headingLevel = 'h1', title, ...props }) {
    return (<div aria-live={ariaLive} className={(0, clsx_1.default)([
            'ds_notification-panel',
            className
        ])} {...props}>
            <WrapperTag_1.default className="ds_notification-panel__title" tagName={headingLevel}>
                {title}
            </WrapperTag_1.default>
            <div className="ds_notification-panel__content">
                {children}
            </div>
        </div>);
};
NotificationPanel.displayName = 'NotificationPanel';
exports.default = NotificationPanel;
