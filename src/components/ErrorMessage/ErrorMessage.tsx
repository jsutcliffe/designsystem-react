const ErrorMessage = ({
    children,
    className,
    id,
    text,
    ...props
}: SGDS.Component.ErrorMessage) => {
    return (
        <p
            className={[
                'ds_question__error-message',
                className
            ].join(' ')}
            dangerouslySetInnerHTML={text ? { __html: text } : undefined}
            id={id}
            {...props}
        >
            {!text ? children : null}
        </p>
    );
};

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
