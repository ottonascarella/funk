import curry from '../lambda/curry';
const arraySwap = (name) => curry((funk, coll) => coll[name](funk));
export default arraySwap;