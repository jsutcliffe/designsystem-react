"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionalWrapper_1 = __importDefault(require("../../common/ConditionalWrapper"));
const Error = ({ fragmentId, title }) => {
    return (<li>
            <ConditionalWrapper_1.default condition={!!fragmentId} wrapper={() => <a href={`#${fragmentId}`}>{title}</a>}>{title}</ConditionalWrapper_1.default>
        </li>);
};
const ErrorSummary = ({ className, errors, title = 'There is a problem', ...props }) => {
    return (<>
            {errors && errors.length && (<div className={[
                'ds_error-summary',
                className
            ].join(' ')} aria-labelledby="error-summary-title" role="alert" {...props}>
                    <h2 className="ds_error-summary__title" id="error-summary-title">{title}</h2>

                    <ul className="ds_error-summary__list">
                        {errors && errors.map((error, index) => (<Error fragmentId={error.fragmentId} title={error.title} key={'error' + index}/>))}
                    </ul>
                </div>)}
        </>);
};
ErrorSummary.displayName = 'ErrorSummary';
exports.default = ErrorSummary;
