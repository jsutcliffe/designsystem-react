/**
 * @param {React.PropsWithChildren} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const InsetText: React.FC<React.PropsWithChildren> = ({
    children,
    ...props
}) => {
    return (
        <div
            className="ds_inset-text"
            {...props}
        >
            <div className="ds_inset-text__text">
                {children}
            </div>
        </div>
    );
};

export default InsetText;
