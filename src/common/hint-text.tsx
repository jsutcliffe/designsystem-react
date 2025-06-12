const HintText: React.FC<SGDS.Common.HintText> = ({
    children,
    id,
    text,
    ...props
}) => {
    return (
        <p
            className="ds_hint-text"
            dangerouslySetInnerHTML={text ? { __html: text } : undefined}
            id={id}
            {...props}
        >
            {!text ? children : null}
        </p>
    );
};

HintText.displayName = 'HintText';

export default HintText;
