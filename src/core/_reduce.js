import _reduceArray from './_reduceArray';
import _reduceObj from './_reduceObj';

export default (funk, initial, coll) => {
    if (Array.isArray(coll)) return _reduceArray(funk, initial, coll);
    return _reduceObj(funk, initial, coll);
};