import Icon from '../../common/icon';
import WrapperTag from '../../common/wrapper-tag';

/**
 * @param {Object} props - Properties for the element
 * @param {AriaLive} [props.ariaLive='polite'] - Value to use for aria-live
 * @param {HeaderLevel} [props.headerLevel='h3'] - Header level to use
 * @param {string} props.title - Title text
 * @returns {JSX.Element} - The element
 */
const ConfirmationMessage: React.FC<SGDS.Component.ConfirmationMessage> = ({
    ariaLive = 'polite',
    children,
    headerLevel = 'h3',
    title,
    ...props
}) => {
    // make sure that the header uses a heading element.
    // use H3 if an invalid element is provided.
    const allowedLevels = 'h1,h2,h3,h4,h5,h6'.split(',');
    const tagName = allowedLevels.includes(headerLevel) ? headerLevel : 'h3';

    return (
        <div
            aria-live={ariaLive}
            className="ds_confirmation-message"
            {...props}
        >
            <Icon className="ds_confirmation-message__icon" icon="check_circle" iconSize="24" />

            <WrapperTag
                className="ds_confirmation-message__title"
                tagName={tagName}
            >
                {title}
            </WrapperTag>
            <div className="ds_confirmation-message__body">
                {children}
            </div>
        </div>
    );
};


export default ConfirmationMessage;
