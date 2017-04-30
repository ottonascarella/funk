import curry from '../lambda/curry';
import _map from './_map';
import prop from './prop';
const pluck = curry((name, coll) => _map(prop(name), coll));
export default pluck;