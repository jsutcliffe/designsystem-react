const ConditionalWrapper: React.FC<SGDS.Common.ConditionalWrapper> = ({ condition, wrapper, children}) =>
    condition ? wrapper(children) : children;

export default ConditionalWrapper;
