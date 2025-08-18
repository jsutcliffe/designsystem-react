import Tag from "../Tag/Tag";

const PhaseBanner = ({
    children,
    className,
    phaseName,
    ...props
}: SGDS.Component.PhaseBanner) => {
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
                    {phaseName && <Tag className="ds_phase-banner__tag">{phaseName}</Tag>}
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
