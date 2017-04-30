import curry from '../lambda/curry';
const drop = curry((qt, coll) => coll.slice(qt));
export default drop;