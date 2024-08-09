import React from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../error-message/error-message';
import HintText from '../common/hint-text';
import WrapperTag from '../common/wrapper-tag';

/**
 * @param {SObject} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Question = function ({
    children,
    error,
    errorMessage,
    hintText,
    legend,
    tagName = 'div',
    ...props
}) {
    return (
        <WrapperTag
            tagName={tagName}
            className={[
                'ds_question',
                error && 'ds_question--error'
            ].join(' ')}
            {...props}
        >
            {legend && <legend>{legend}</legend>}
            {hintText && <HintText text={hintText} />}
            {error && <ErrorMessage text={errorMessage} />}
            {children}
        </WrapperTag>
    );
};
Question.propTypes = {
    children: PropTypes.isRequired,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    hintText: PropTypes.string,
    legend: PropTypes.string,
    tagName: PropTypes.string
};

export default Question;
