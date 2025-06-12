export const MetadataItem: React.FC<SGDS.Component.Metadata.Item> = ({
    children,
    name,
    ...props
}) => {
    return (
        <div className="ds_metadata__item"
            {...props}
        >
            <dt className="ds_metadata__key">{name}</dt>{' '}
            <dd className="ds_metadata__value">
                {children}
            </dd>
        </div>
    );
};

const Metadata: React.FC<SGDS.Component.Metadata> = ({
    children,
    inline,
    ...props
}) => {
    return (
        <dl
            className={[
                'ds_metadata',
                inline && 'ds_metadata--inline',
            ].join(' ')}
            {...props}
        >
            {children}
        </dl>
    );
};

Metadata.displayName = 'Metadata';
MetadataItem.displayName = 'MetadataItem';

export default Metadata;
