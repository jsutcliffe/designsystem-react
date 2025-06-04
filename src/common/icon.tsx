/**
 * @param {Object} props - Properties for the element
 * @param {boolean} [props.accessible=false] - Controls aria-hidden on the icon
 * @param {string} [props.className] - Additional CSS class name for the icon
 * @param {boolean} [props.fill=false] - Whether to use the filled version of an icon
 * @param {string} props.icon - Name of the icon in the stack
 * @param {string} [props.iconPath='./icons.stack.svg'] - Path to the icon stack
 * @param {string} [props.iconSize] - Size of to use for the icon
 * @param {string} [props.title] - Value to use for an aria-label on the icon
 * @returns {JSX.Element} - The element
 */
const Icon: React.FC<SGDS.Common.Icon> = ({
    accessible = false,
    className,
    fill,
    icon,
    iconPath = './icons.stack.svg',
    iconSize,
    title
}) => {
    return (
        <svg
            aria-hidden={!accessible}
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

export default Icon;
