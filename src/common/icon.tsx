const Icon: React.FC<SGDS.Common.Icon> = ({
    className,
    fill,
    icon,
    iconPath = './icons.stack.svg',
    iconSize,
    title
}) => {
    return (
        <svg
            aria-hidden={title ? undefined : true}
            aria-label={title}
            className={[
                'ds_icon',
                className,
                fill && 'ds_icon--fill',
                iconSize && `ds_icon--${iconSize}`
            ].join(' ')}
            role="img"
        >
            <use xlinkHref={`${iconPath}#${icon}`} />
        </svg>
    );
};

Icon.displayName = 'Icon';

export default Icon;
