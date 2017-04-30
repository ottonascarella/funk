import curry from '../lambda/curry';
import _map from './_map';
import _reduceArray from './_reduceArray';

const map = curry((funk, coll) => {

    if (Array.isArray(coll)) return _map(funk, coll);

    return _reduceArray((obj, [key, val]) => {

        obj[key] = funk(val);
        return obj;

    }, {}, Object.entries(coll));

});

export default map;