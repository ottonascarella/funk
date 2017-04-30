import _reduceArray from '../core/_reduceArray';

const pipe = (first, ...rest) => (
    (...args) => _reduceArray((acc, funk) => funk(acc), first(...args), rest)
);

export default pipe;