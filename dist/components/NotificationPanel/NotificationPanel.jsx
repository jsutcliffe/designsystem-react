"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
const NotificationPanel = function ({ ariaLive, children, className, headingLevel = 'h1', title, ...props }) {
    return (<div aria-live={ariaLive} className={[
            'ds_notification-panel',
            className
        ].join(' ')} {...props}>
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
