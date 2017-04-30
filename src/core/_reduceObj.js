import _reduceArray from './_reduceArray';

export default (funk, initial, obj) => {
    const entries = Object.entries(obj);
    return _reduceArray(funk, initial, entries);
};