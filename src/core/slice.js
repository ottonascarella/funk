import curry from '../lambda/curry';
const slice = curry((start, end, coll) => coll.slice(start, end));
export default slice;