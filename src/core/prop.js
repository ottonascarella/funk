import curry from '../lambda/curry';
const prop = curry((name, object) => object[name]);
export default prop;