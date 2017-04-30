import pipe from './pipe';

const compose = (...args) => pipe(...args.reverse());

export default compose;