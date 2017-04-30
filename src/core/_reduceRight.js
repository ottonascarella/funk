import _reduceRightObj from './_reduceRightObj';
import _reduceRightArray from './_reduceRightArray';

const _reduceRight = (funk, initial, coll) => {
    if (Array.isArray(coll)) return _reduceRightArray(funk, initial, coll);
    return _reduceRightObj(funk, initial, coll);
};

export default _reduceRight;
