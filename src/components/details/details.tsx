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

Details.displayName = 'Details';

export default Details;
