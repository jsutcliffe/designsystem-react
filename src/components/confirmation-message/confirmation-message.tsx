import Icon from '../../common/icon';
import WrapperTag from '../../common/wrapper-tag';

const ConfirmationMessage: React.FC<SGDS.Component.ConfirmationMessage> = ({
    ariaLive = 'polite',
    children,
    className,
    headerLevel = 'h3',
    title,
    ...props
}) => {
    return (
        <div
            aria-live={ariaLive}
            className={[
                'ds_confirmation-message',
                className
            ].join(' ')}
            {...props}
        >
            <Icon className="ds_confirmation-message__icon" icon="CheckCircle" iconSize="24" />

            <WrapperTag
                className="ds_confirmation-message__title"
                tagName={headerLevel}
            >
                {title}
            </WrapperTag>
            {children && <div className="ds_confirmation-message__body">
                {children}
            </div>}
        </div>
    );
};

ConfirmationMessage.displayName = 'ConfirmationMessage';

export default ConfirmationMessage;
