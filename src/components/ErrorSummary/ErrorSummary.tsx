import ConditionalWrapper from '../../common/ConditionalWrapper';

const Error: React.FC<SGDS.Component.ErrorSummary.Error> = ({
    fragmentId,
    title
}) => {
    return (
        <li>
            <ConditionalWrapper
                condition={!!fragmentId}
                wrapper={() => <a href={`#${fragmentId}`}>{title}</a>}
            >{title}</ConditionalWrapper>
        </li>
    );
};

const ErrorSummary: React.FC<SGDS.Component.ErrorSummary> = ({
    className,
    errors,
    title = 'There is a problem',
    ...props
}) => {
    return (
        <>
            {errors && errors.length && (
                <div className={[
                        'ds_error-summary',
                        className
                    ].join(' ')}
                    aria-labelledby="error-summary-title"
                    role="alert"
                    {...props}
                >
                    <h2 className="ds_error-summary__title" id="error-summary-title">{title}</h2>

                    <ul className="ds_error-summary__list">
                        {errors && errors.map((error, index: number) => (
                            <Error fragmentId={error.fragmentId} title={error.title} key={'error' + index} />
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

ErrorSummary.displayName = 'ErrorSummary';

export default ErrorSummary;
