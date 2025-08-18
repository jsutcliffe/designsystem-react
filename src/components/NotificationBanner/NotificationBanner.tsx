import { useEffect, useRef } from 'react';
import AbstractNotificationBanner from '../../common/AbstractNotificationBanner';
// @ts-ignore
import DSNotificationBanner from '@scottish-government/design-system/src/components/notification-banner/notification-banner';

const NotificationBanner = ({
    children,
    className,
    close,
    hasColourIcon,
    hasInverseIcon,
    icon,
    title,
    ...props
}: SGDS.Common.AbstractNotificationBanner) => {
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
            hasColourIcon={hasColourIcon}
            hasInverseIcon={hasInverseIcon}
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
