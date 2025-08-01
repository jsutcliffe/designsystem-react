"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorMessage = ({ children, className, id, text, ...props }) => {
    return (<p className={[
            'ds_question__error-message',
            className
        ].join(' ')} dangerouslySetInnerHTML={text ? { __html: text } : undefined} id={id} {...props}>
            {!text ? children : null}
        </p>);
};
ErrorMessage.displayName = 'ErrorMessage';
exports.default = ErrorMessage;
