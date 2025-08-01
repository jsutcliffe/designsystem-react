"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = __importDefault(require("../../common/Icon"));
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
const ConfirmationMessage = ({ ariaLive = 'polite', children, className, headingLevel = 'h3', title, ...props }) => {
    return (<div aria-live={ariaLive} className={[
            'ds_confirmation-message',
            className
        ].join(' ')} {...props}>
            <Icon_1.default className="ds_confirmation-message__icon" icon="CheckCircle" iconSize="24"/>

            <WrapperTag_1.default className="ds_confirmation-message__title" tagName={headingLevel}>
                {title}
            </WrapperTag_1.default>
            {children && <div className="ds_confirmation-message__body">
                {children}
            </div>}
        </div>);
};
ConfirmationMessage.displayName = 'ConfirmationMessage';
exports.default = ConfirmationMessage;
