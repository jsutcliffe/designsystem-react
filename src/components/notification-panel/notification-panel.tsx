import WrapperTag from '../../common/wrapper-tag';

const NotificationPanel: React.FC<SGDS.Component.NotificationPanel> = function ({
    ariaLive,
    children,
    className,
    headerLevel = 'h1',
    title,
    ...props
}) {
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
                tagName={headerLevel}
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
