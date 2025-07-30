export const SkipLink: React.FC<SGDS.Component.SkipLinks.Link> = ({
    targetId,
    title
}) => {
    return (
        <li
            className="ds_skip-links__item"
        >
            <a href={`#${targetId}`} className="ds_skip-links__link">{ title }</a>
        </li>
    );
};

const SkipLinks: React.FC<SGDS.Component.SkipLinks> = ({
    items,
    mainContentId = 'main-content',
    mainLinkText = 'Skip to main content',
    ...props
}) => {
    return (
        <div
            className="ds_skip-links"
            {...props}
        >
            <ul className="ds_skip-links__list">
                <SkipLink title={mainLinkText} targetId={mainContentId}/>

                {items && items.map((item, index: number) => (
                    <SkipLink title={item.title} targetId={item.targetId} key={`skiplink-${index}`}/>
                ))}
            </ul>
        </div>
    );
};

SkipLinks.displayName = 'SkipLinks';
SkipLink.displayName = 'SkipLink';

export default SkipLinks;
