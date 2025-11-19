import ConditionalWrapper from "../../common/ConditionalWrapper";

const Content = ({ children, className, ...props }: any /* SGDS.Component.FeatureHeader.Primary*/) => {
    return (
        <div className={['ds_feature-header__primary', className].join(' ')} {...props}>
            {children}
        </div>
    );
}

const Media = ({ children, className, isCover, noPadding, ...props }: any /* SGDS.Component.FeatureHeader.Secondary*/) => {
    return (
        <div className={[
            'ds_feature-header__secondary',
            isCover && 'ds_feature-header__secondary--cover',
            noPadding && 'ds_feature-header__secondary--no-padding',
            className
        ].join(' ')} {...props}>
            {children}
        </div>
    );
}

const FeatureHeader = ({
    backgroundColour = 'NONE',
    children,
    className,
    isFullWidth,
    isTopAligned,
    isWideText,
    ...props
}: any /* SGDS.Component.FeatureHeader*/) => {
    let backgroundColorClass = '';

    switch (backgroundColour) {
        case 'BRAND':
            backgroundColorClass = 'ds_feature-header--background';
            break;
        case 'SECONDARY':
            backgroundColorClass = 'ds_feature-header--background-secondary';
            break;
        case 'TERTIARY':
            backgroundColorClass = 'ds_feature-header--background-tertiary';
            break;
        case 'NONE':
            break;
        default:
            backgroundColorClass = '';
            break;
    }

    return (
        <header
            className={[
                'ds_feature-header',
                isFullWidth && 'ds_feature-header--fullwidth',
                isTopAligned && 'ds_feature-header--top',
                isWideText && 'ds_feature-header--wide',
                backgroundColorClass,
                className
            ].join(' ')}
            {...props}
        >
            <ConditionalWrapper
                condition={isFullWidth}
                wrapper={(children: React.JSX.Element) => <div className="ds_wrapper">{children}</div>}
            >
                {children}
            </ConditionalWrapper>
        </header>
    );
};

FeatureHeader.displayName = 'FeatureHeader';
Content.displayName = 'FeatureHeader.Content';
Media.displayName = 'FeatureHeader.Media';
FeatureHeader.Content = Content;
FeatureHeader.Media = Media;

export default FeatureHeader;


/*

<FeatureHeader backgroundColour="NONE/BRAND/SECONDARY/TERTIARY" isFullWidth isWideText isTopAligned>
    <FeatureHeader.Content>
        {children}
    </FeatureHeader.Content>
    <FeatureHeader.Media noPadding isCover>
        {children}
    </FeatureHeader.Media>
</FeatureHeader>

*/
