const ConditionalWrapper = function ({ condition, wrapper, children}) {
    if (condition) {
        return wrapper(children);
    } else {
        return children;
    }
}

export default ConditionalWrapper;
