import curry from '../lambda/curry';
import _reduce from './_reduce';

const foldl1 = curry((funk, coll) => _reduce(funk, null, coll));

export default foldl1;