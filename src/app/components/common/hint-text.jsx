import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const HintText = function ({
    children,
    id,
    text,
    ...props
}) {
    return (
        <p
            className={[
                'ds_hint-text',
            ].join(' ')}
            dangerouslySetInnerHTML={text ? { __html: text } : undefined}
            id={id}
            {...props}
        >
            {!text ? children : null}
        </p>
    );
};
HintText.propTypes = {
    children: PropTypes.element,
    id: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default HintText;
