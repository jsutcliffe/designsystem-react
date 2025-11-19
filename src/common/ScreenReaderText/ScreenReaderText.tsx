const ScreenReaderText = ({
    children,
    ...props
}: SGDS.Common.ScreenReaderText) => {
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
