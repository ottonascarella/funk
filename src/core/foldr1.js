import curry from '../lambda/curry';
import _reduceRight from './_reduceRight';

const foldr1 = curry((funk, coll) => _reduceRight(funk, null, coll));

export default foldr1;