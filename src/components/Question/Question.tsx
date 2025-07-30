import ErrorMessage from '../ErrorMessage/ErrorMessage';
import HintText from '../../common/HintText';
import WrapperTag from '../../common/WrapperTag';

const Question: React.FC<SGDS.Component.Question> = function ({
    children,
    className,
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
                error && 'ds_question--error',
                className
            ].join(' ')}
            {...props}
        >
            {legend && <legend>{legend}</legend>}
            {hintText && <HintText text={hintText} />}
            {error && errorMessage && <ErrorMessage text={errorMessage} />}
            {children}
        </WrapperTag>
    );
};

Question.displayName = 'Question';

export default Question;
