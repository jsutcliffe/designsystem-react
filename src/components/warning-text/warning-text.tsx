/**
 * @param {React.PropsWithChildren} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const WarningText: React.FC<React.PropsWithChildren> = ({
    children,
    ...props
}) => {
    return (
        <div
            className="ds_warning-text"
            {...props}
        >
            <strong className="ds_warning-text__icon" aria-hidden="true"></strong>
            <strong className="visually-hidden">Warning</strong>
            <div className="ds_warning-text__text">
                {children}
            </div>
        </div>
    );
};

export default WarningText;
