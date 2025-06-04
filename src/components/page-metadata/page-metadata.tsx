/**
 * @param {Object} props - Properties for the element
 * @param {string} props.name - Text label for the metadata item
 * @returns {JSX.Element} - The element
 */
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

/**
 * @param {Object} props - Properties for the element
 * @param {boolean} props.inline - Use the 'inline' option
 * @returns {JSX.Element} - The element
 */
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

export default Metadata;
