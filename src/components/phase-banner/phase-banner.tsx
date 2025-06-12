import Tag from "../tag/tag";

const PhaseBanner: React.FC<SGDS.Component.PhaseBanner> = ({
    children,
    phaseName,
    ...props
}) => {
    return (
        <div
            className="ds_phase-banner"
            {...props}
        >
            <div className="ds_wrapper">
                <p className="ds_phase-banner__content">
                    {phaseName && <Tag title={phaseName} className="ds_phase-banner__tag" />}
                    <span className="ds_phase-banner__text">
                        {children || "This is a new service"}
                    </span>
                </p>
            </div>
        </div>
    )
}

PhaseBanner.displayName = 'PhaseBanner';

export default PhaseBanner;
