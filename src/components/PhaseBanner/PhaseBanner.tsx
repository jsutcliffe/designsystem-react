import Tag from "../Tag/Tag";

const PhaseBanner: React.FC<SGDS.Component.PhaseBanner> = ({
    children,
    className,
    content,
    phaseName,
    ...props
}) => {
    return (
        <div
            className={[
                'ds_phase-banner',
                className
            ].join(' ')}
            {...props}
        >
            <div className="ds_wrapper">
                <p className="ds_phase-banner__content">
                    {phaseName && <Tag title={phaseName} className="ds_phase-banner__tag" />}
                    <span className="ds_phase-banner__text">
                        {content ? content : children || "This is a new service"}
                    </span>
                </p>
            </div>
        </div>
    )
}

PhaseBanner.displayName = 'PhaseBanner';

export default PhaseBanner;
