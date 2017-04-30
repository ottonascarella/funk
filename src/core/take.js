import curry from '../lambda/curry';
const take = curry((qt, coll) => coll.slice(0, qt));
export default take;