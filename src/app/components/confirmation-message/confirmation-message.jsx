import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../common/icon';
import WrapperTag from '../common/wrapper-tag';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ConfirmationMessage = function ({
    ariaLive = 'polite',
    children,
    headerLevel = 'h3',
    title,
    ...props
}) {
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
            <Icon className="ds_confirmation-message__icon" icon="check_circle" size="24" />

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
ConfirmationMessage.propTypes = {
    ariaLive: PropTypes.string,
    children: PropTypes.string,
    headerLevel: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default ConfirmationMessage;
