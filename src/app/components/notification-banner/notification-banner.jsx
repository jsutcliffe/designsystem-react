import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DSNotificationBanner from '../../../../node_modules/@scottish-government/design-system/src/components/notification-banner/notification-banner';
import Button from '../button/button';
import Icon from '../common/dsicon';
import ScreenReaderText from '../common/screen-reader-text';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const NotificationBanner = function({
    children,
    close,
    icon,
    iconColour,
    iconInverse,
    title = 'Information',
    ...props
}) {
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
NotificationBanner.propTypes = {
    children: PropTypes.string,
    close: PropTypes.bool,
    icon: PropTypes.bool,
    iconColour: PropTypes.bool,
    iconInverse: PropTypes.bool,
    title: PropTypes.string
};

export default NotificationBanner;
