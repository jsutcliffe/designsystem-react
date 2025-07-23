import { Children, isValidElement } from 'react';
import Icon from './icon';
import ScreenReaderText from './screen-reader-text';

const Buttons: React.FC<SGDS.Common.AbstractNotificationBanner.Buttons> = ({
    children
}) => {
    return (<>{children}</>);
}

const AbstractNotificationBanner: React.FC<SGDS.Common.AbstractNotificationBanner>
    & { Buttons: React.FC<SGDS.Common.AbstractNotificationBanner.Buttons> } = ({
    children,
    className,
    close,
    icon,
    iconColour,
    iconInverse,
    title = 'Information',
    ...props
}) => {
    let content: any[] = [];
    let buttons;

    Children.forEach(children, (child) => {
        if (isValidElement(child) && child.type === Buttons) {
            buttons = child;
        } else {
            content.push(child);
        }
    });

    return (
        <div
            className={[
                'ds_notification',
                className
            ].join(' ')}
            data-module="ds-notification"
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
                            <Icon icon={icon} />
                        </span>
                    }

                    <div className="ds_notification__text">
                        {content}
                    </div>

                    {close &&
                        <button type="button" className="ds_notification__close js-close-notification">
                            <ScreenReaderText>Close this notification</ScreenReaderText>
                            <Icon fill icon="Close" aria-hidden="true" />
                        </button>
                    }

                    {buttons &&
                        <div className="ds_button-group">
                            {buttons}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

AbstractNotificationBanner.displayName = 'AbstractNotificationBanner';
AbstractNotificationBanner.Buttons = Buttons;

export default AbstractNotificationBanner;
