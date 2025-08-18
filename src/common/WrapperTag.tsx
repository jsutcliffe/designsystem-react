/**
 * Wraps all children in a specified HTML tag.
 */
const WrapperTag = ({
    children,
    tagName = 'div',
    ...props
}: SGDS.Common.WrapperTag) => {
    const TagName = tagName;
    return <TagName {...props}>{children}</TagName>;
};

WrapperTag.displayName = 'WrapperTag';

export default WrapperTag;
