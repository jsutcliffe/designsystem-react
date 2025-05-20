/**
 * @param {Object} props - Properties for the element
 * @param {string} props.id
 * @param {string} props.text
 * @returns {JSX.Element} - The element
 */
const ErrorMessage: React.FC<SGDS.Component.ErrorMessage> = ({
    children,
    id,
    text,
    ...props
}) => {
    return (
        <p
            className={[
                'ds_question__error-message',
            ].join(' ')}
            dangerouslySetInnerHTML={text ? { __html: text } : undefined}
            id={id}
            {...props}
        >
            {!text ? children : null}
        </p>
    );
};

export default ErrorMessage;
