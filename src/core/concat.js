import curry from '../lambda/curry';

const concat = curry((coll, ...args) =>
    args.reduce((coll, other) => coll.concat(other), coll));

export default concat;