import _reduceRightArray from './_reduceRightArray';

export default (funk, initial, obj) => {
    const entries = Object.entries(obj);
    return _reduceRightArray(funk, initial, entries);
};