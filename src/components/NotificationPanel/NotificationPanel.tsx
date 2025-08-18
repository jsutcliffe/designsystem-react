import WrapperTag from '../../common/WrapperTag';

const NotificationPanel = function ({
    ariaLive,
    children,
    className,
    headingLevel = 'h1',
    title,
    ...props
}: SGDS.Component.NotificationPanel) {
    return (
        <div
            aria-live={ariaLive}
            className={[
                'ds_notification-panel',
                className
            ].join(' ')}
            {...props}
        >
            <WrapperTag
                className="ds_notification-panel__title"
                tagName={headingLevel}
            >
                {title}
            </WrapperTag>
            <div className="ds_notification-panel__content">
                {children}
            </div>
        </div>
    );
};

NotificationPanel.displayName = 'NotificationPanel';

export default NotificationPanel;
