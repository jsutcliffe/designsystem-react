import { useEffect, useRef } from 'react';
// @ts-ignore
import DSNotificationBanner from '@scottish-government/design-system/src/components/notification-banner/notification-banner';
import Button from '../button/button';
import Icon from '../../common/icon';
import ScreenReaderText from '../../common/screen-reader-text';

const NotificationBanner: React.FC<SGDS.Component.NotificationBanner> = ({
    children,
    close,
    icon,
    iconColour,
    iconInverse,
    title = 'Information',
    ...props
}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSNotificationBanner(ref.current).init();
        }
    }, [ref]);

    return (
        <div
            className="ds_notification  ds_reversed"
            data-module="ds-notification"
            ref={ref}
            {...props}
        >
            <div className="ds_wrapper">
                <div className={
                    [
                        'ds_notification__content',
                        close && 'ds_notification__content--has-close'
                    ].join(' ')}
                >
                    <h2 className="visually-hidden">{title}</h2>

                    {icon &&
                        <span
                        className={[
                                'ds_notification__icon',
                                iconInverse && 'ds_notification__icon--inverse',
                                iconColour && 'ds_notification__icon--colour'
                            ].join(' ')} aria-hidden="true">
                            <Icon icon="priority_high" />
                        </span>
                    }

                    <div className="ds_notification__text">
                        {children}
                    </div>

                    {close &&
                        <Button className="ds_notification__close js-close-notification">
                            <ScreenReaderText>Close this notification</ScreenReaderText>
                            <Icon fill icon="close" aria-hidden="true" />
                        </Button>
                    }
                </div>
            </div>
        </div>
    );
};

NotificationBanner.displayName = 'NotificationBanner';

export default NotificationBanner;
