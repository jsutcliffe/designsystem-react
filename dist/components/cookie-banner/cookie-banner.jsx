"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_notification_banner_1 = __importDefault(require("../../common/abstract-notification-banner"));
const CookieBanner = ({ children, className, title, ...props }) => {
    return (<>
            <abstract_notification_banner_1.default className={[
            'ds_notification--large',
            'ds_notification--cookie',
            'js-initial-cookie-content',
            className
        ].join(' ')} data-module="ds-cookie-notification" title={title} {...props}>
                {children}
            </abstract_notification_banner_1.default>
        </>);
};
CookieBanner.displayName = 'CookieBanner';
CookieBanner.Buttons = abstract_notification_banner_1.default.Buttons;
exports.default = CookieBanner;
