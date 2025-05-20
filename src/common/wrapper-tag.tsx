/**
 * Wraps any given children in a given `tag`.
 *
 * @param {Object} props - Properties for the element
 * @param {string} [props.tagName='div'] - Element type to use
 * @returns {JSX.Element} - The element
 */
const WrapperTag: React.FC<SGDS.Common.WrapperTag> = ({
    children,
    tagName = 'div',
    ...props
}) => {
    const TagName = tagName;
    return <TagName {...props}>{children}</TagName>;
};

export default WrapperTag;
