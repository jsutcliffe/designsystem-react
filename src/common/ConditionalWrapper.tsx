/**
 * Wraps all children in a specified HTML tag if a condition is met.
 */
const ConditionalWrapper = ({ condition, wrapper, children }:SGDS.Common.ConditionalWrapper) =>
    condition ? wrapper(children) : children;

ConditionalWrapper.displayName = 'ConditionalWrapper';

export default ConditionalWrapper;
