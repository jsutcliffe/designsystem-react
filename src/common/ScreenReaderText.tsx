const ScreenReaderText: React.FC<SGDS.Common.ScreenReaderText> = ({
    children,
    ...props
}) => {
    return (
        <span
            className="visually-hidden"
            {...props}
        >
            {children}
        </span>
    );
};

ScreenReaderText.displayName = 'ScreenReaderText';

export default ScreenReaderText;
