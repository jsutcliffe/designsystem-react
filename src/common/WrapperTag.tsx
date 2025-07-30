/**
 * Wraps all children in a specified HTML tag.
 */
const WrapperTag: React.FC<SGDS.Common.WrapperTag> = ({
    children,
    tagName = 'div',
    ...props
}) => {
    const TagName = tagName;
    return <TagName {...props}>{children}</TagName>;
};

WrapperTag.displayName = 'WrapperTag';

export default WrapperTag;
