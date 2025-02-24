import React from 'react';
import PropTypes from 'prop-types';
import WrapperTag from '../common/wrapper-tag';
import '../../typedefs';

/**
 * @param {Object} props - Properties for the element
 * @param {AriaLive} [props.ariaLive] - Value to use for aria-live
 * @param {HeaderLevel} [props.headerLevel='h1'] - Header level to use
 * @param {string} props.title - Title text
 * @returns {JSX.Element} - The element
 */
const NotificationPanel = function ({
    ariaLive,
    children,
    headerLevel = 'h1',
    title,
    ...props
}) {
    // make sure that the header uses a heading element.
    // use H1 if an invalid element is provided.
    const allowedLevels = 'h1,h2,h3,h4,h5,h6'.split(',');
    const tagName = allowedLevels.includes(headerLevel) ? headerLevel : 'h1';

    return (
        <div
            aria-live={ariaLive}
            className="ds_notification-panel ds_notification-panel--success"
            {...props}
        >
            <WrapperTag
                className="ds_notification-panel__title"
                tagName={tagName}
            >
                {title}
            </WrapperTag>
            <div className="ds_notification-panel__content">
                {children}
            </div>
        </div>
    );
};
NotificationPanel.propTypes = {
    ariaLive: PropTypes.string,
    children: PropTypes.element,
    headerLevel: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default NotificationPanel;
