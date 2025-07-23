import { useEffect, useRef } from 'react';
import AbstractNotificationBanner from '../../common/abstract-notification-banner';
// @ts-ignore
import DSNotificationBanner from '@scottish-government/design-system/src/components/notification-banner/notification-banner';

const NotificationBanner: React.FC<SGDS.Common.AbstractNotificationBanner>
    & { Buttons?: React.FC<SGDS.Common.AbstractNotificationBanner.Buttons> } = ({
    children,
    className,
    close,
    icon,
    iconColour,
    iconInverse,
    title,
    ...props
}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSNotificationBanner(ref.current).init();
        }
    }, [ref]);

    return (
        <AbstractNotificationBanner
            className={[
                'ds_reversed',
                className
            ].join(' ')}
            close={close}
            icon={icon ? "PriorityHigh" : undefined}
            iconColour={iconColour}
            iconInverse={iconInverse}
            ref={ref}
            title="Information"
            {...props}
        >
            {children}
        </AbstractNotificationBanner>
    );
};

NotificationBanner.displayName = 'NotificationBanner';
NotificationBanner.Buttons = AbstractNotificationBanner.Buttons;

export default NotificationBanner;
