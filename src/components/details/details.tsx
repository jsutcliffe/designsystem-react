/**
 * @param {Object} props - Properties for the element
 * @param {string} props.summary - Summary text
 * @returns {JSX.Element} - The element
 */
const Details: React.FC<SGDS.Component.Details> = ({
    children,
    summary,
    ...props
}) => {
    return (
        <details
            className={[
                "ds_details",
            ].join(' ')}
            {...props}
        >
            <summary className="ds_details__summary">
                {summary}
            </summary>
            <div className="ds_details__text">
                {children}
            </div>
        </details>
    );
};

export default Details;
