import Icon from '../../common/icon';
import WrapperTag from '../../common/wrapper-tag';

const ConfirmationMessage: React.FC<SGDS.Component.ConfirmationMessage> = ({
    ariaLive = 'polite',
    children,
    headerLevel = 'h3',
    title
}) => {
    return (
        <div
            aria-live={ariaLive}
            className="ds_confirmation-message"
        >
            <Icon className="ds_confirmation-message__icon" icon="check_circle" iconSize="24" />

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
