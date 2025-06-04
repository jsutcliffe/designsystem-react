/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
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

export default ScreenReaderText;
