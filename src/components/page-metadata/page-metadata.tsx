const MetadataItem: React.FC<SGDS.Component.Metadata.Item> = ({
    children,
    className,
    name,
    ...props
}) => {
    return (
        <div className={[
            'ds_metadata__item',
            className
        ].join(' ')}
            {...props}
        >
            <dt className="ds_metadata__key">{name}</dt>{' '}
            <dd className="ds_metadata__value">
                {children}
            </dd>
        </div>
    );
};

const Metadata: React.FC<SGDS.Component.Metadata>
    & { Item: React.FC<SGDS.Component.Metadata.Item> }    = ({
    children,
    className,
    inline,
    ...props
}) => {
    return (
        <dl
            className={[
                'ds_metadata',
                inline && 'ds_metadata--inline',
                className
            ].join(' ')}
            {...props}
        >
            {children}
        </dl>
    );
};

Metadata.displayName = 'Metadata';
MetadataItem.displayName = 'Metadata.Item';
Metadata.Item = MetadataItem;

export default Metadata;
