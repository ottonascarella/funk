import curry from '../lambda/curry';
import _map from './_map';
import prop from './prop';
const pluck = curry((name, coll) => {
    const get = prop(name);
    return _map(get, coll);
});
export default pluck;