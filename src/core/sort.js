import curry from '../lambda/curry';
const sort = curry((funk, coll) => coll.slice().sort(funk));
export default sort;