import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ErrorMessage = function ({
    children,
    id,
    text,
    ...props
}) {
    return (
        <p
            className={[
                'ds_question__error-message',
            ].join(' ')}
            dangerouslySetInnerHTML={text ? { __html: text } : undefined}
            id={id}
            {...props}
        >
            {!text ? children : null}
        </p>
    );
};
ErrorMessage.propTypes = {
    children: PropTypes.element,
    id: PropTypes.string.isRequired,
    text: PropTypes.string
};

export default ErrorMessage;
