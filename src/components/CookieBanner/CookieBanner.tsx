
import AbstractNotificationBanner from '../../common/AbstractNotificationBanner';
// @ts-ignore
import DSCookieBanner from '@scottish-government/design-system/src/components/cookie-notification/cookie-notification.js';

const CookieBanner = ({
    children,
    className,
    title,
    ...props
}: SGDS.Common.AbstractNotificationBanner) => {

    return (
        <>
            <AbstractNotificationBanner
                className={[
                    'ds_notification--large',
                    'ds_notification--cookie',
                    'js-initial-cookie-content',
                    className
                ].join(' ')}
                data-module="ds-cookie-notification"
                title={title}
                {...props}
            >
                {children}
            </AbstractNotificationBanner>
        </>
    );
}

CookieBanner.displayName = 'CookieBanner';
CookieBanner.Buttons = AbstractNotificationBanner.Buttons;
CookieBanner.Buttons.displayName = 'CookieBanner.Buttons';

export default CookieBanner;
