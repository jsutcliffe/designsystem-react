/**
 * Wraps all children in a specified HTML tag if a condition is met.
 */
const ConditionalWrapper: React.FC<SGDS.Common.ConditionalWrapper> = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

ConditionalWrapper.displayName = 'ConditionalWrapper';

export default ConditionalWrapper;
