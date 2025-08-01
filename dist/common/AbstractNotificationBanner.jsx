"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Icon_1 = __importDefault(require("./Icon"));
const ScreenReaderText_1 = __importDefault(require("./ScreenReaderText"));
const Buttons = ({ children }) => {
    return (<>{children}</>);
};
const AbstractNotificationBanner = ({ children, className, close, icon, iconColour, iconInverse, title = 'Information', ...props }) => {
    let content = [];
    let buttons;
    react_1.Children.forEach(children, (child) => {
        if ((0, react_1.isValidElement)(child) && child.type === Buttons) {
            buttons = child;
        }
        else {
            content.push(child);
        }
    });
    return (<div className={[
            'ds_notification',
            className
        ].join(' ')} data-module="ds-notification" {...props}>
            <div className="ds_wrapper">
                <div className={[
            'ds_notification__content',
            close && 'ds_notification__content--has-close'
        ].join(' ')}>
                    <h2 className="visually-hidden">{title}</h2>

                    {icon &&
            <span className={[
                    'ds_notification__icon',
                    iconInverse && 'ds_notification__icon--inverse',
                    iconColour && 'ds_notification__icon--colour'
                ].join(' ')} aria-hidden="true">
                            <Icon_1.default icon={icon}/>
                        </span>}

                    <div className="ds_notification__text">
                        {content}
                    </div>

                    {close &&
            <button type="button" className="ds_notification__close js-close-notification">
                            <ScreenReaderText_1.default>Close this notification</ScreenReaderText_1.default>
                            <Icon_1.default fill icon="Close" aria-hidden="true"/>
                        </button>}

                    {buttons &&
            <div className="ds_button-group">
                            {buttons}
                        </div>}
                </div>
            </div>
        </div>);
};
AbstractNotificationBanner.displayName = 'AbstractNotificationBanner';
AbstractNotificationBanner.Buttons = Buttons;
exports.default = AbstractNotificationBanner;
