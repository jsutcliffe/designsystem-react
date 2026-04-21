"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AbstractNotificationBanner_1 = __importDefault(require("../../common/AbstractNotificationBanner"));
const notification_banner_1 = __importDefault(require("@scottish-government/design-system/src/components/notification-banner/notification-banner"));
const clsx_1 = __importDefault(require("clsx"));
const NotificationBanner = ({ children, className, hasColourIcon, hasIcon, hasInverseIcon, isDismissable, title = 'Information', ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        /* istanbul ignore else */
        if (ref.current) {
            new notification_banner_1.default(ref.current).init();
        }
    }, [ref]);
    return (<AbstractNotificationBanner_1.default className={(0, clsx_1.default)([
            'ds_reversed',
            className
        ])} isDismissable={isDismissable} icon={hasIcon ? "PriorityHigh" : undefined} hasColourIcon={hasColourIcon} hasInverseIcon={hasInverseIcon} ref={ref} title={title} {...props}>
            {children}
        </AbstractNotificationBanner_1.default>);
};
NotificationBanner.displayName = 'NotificationBanner';
NotificationBanner.Buttons = AbstractNotificationBanner_1.default.Buttons;
exports.default = NotificationBanner;
