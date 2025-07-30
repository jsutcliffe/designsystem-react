const Tag: React.FC<SGDS.Component.Tag> = ({
    className,
    colour,
    title,
    ...props
}) => {
    return (
        <span
            className={[
                'ds_tag',
                className,
                colour && `ds_tag--${colour}`,
            ].join(' ')}
            {...props}
        >
            {title}
        </span>
    );
};

Tag.displayName = 'Tag';

export default Tag;
