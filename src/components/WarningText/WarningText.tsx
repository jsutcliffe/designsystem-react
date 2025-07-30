const WarningText: React.FC<SGDS.Component.WarningText> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            className={[
                'ds_warning-text',
                className
            ].join(' ')}
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

WarningText.displayName = 'WarningText';

export default WarningText;
