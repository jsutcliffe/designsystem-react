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

InsetText.displayName = 'InsetText';

export default InsetText;
