"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractNotificationBanner_1 = __importDefault(require("../../common/AbstractNotificationBanner"));
const CookieBanner = ({ children, className, title, ...props }) => {
    return (<>
            <AbstractNotificationBanner_1.default className={[
            'ds_notification--large',
            'ds_notification--cookie',
            'js-initial-cookie-content',
            className
        ].join(' ')} data-module="ds-cookie-notification" title={title} {...props}>
                {children}
            </AbstractNotificationBanner_1.default>
        </>);
};
CookieBanner.displayName = 'CookieBanner';
CookieBanner.Buttons = AbstractNotificationBanner_1.default.Buttons;
CookieBanner.Buttons.displayName = 'CookieBanner.Buttons';
exports.default = CookieBanner;
