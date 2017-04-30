import curry from '../lambda/curry';
import prop from './prop';
import assoc from './assoc';
import first from './first';
import rest from './rest';

// assocIn(array, [1, 'b'], 35)
// [78, {b: 12}]
// [78, assocIn(array[1], ['b'], 35) ]
// [78, assoc(array[1], 'b', 35) ]

const _createObj = (path, obj) => {
    const [f, s] = path;
    const p = prop(f, obj);
    ///TODO: Should be clonning result of prop in case is Array or Object
    if (p !== undefined) return p;

    return (typeof(s) === 'number') ? [] : {};
};

const assocIn = curry((obj, path, value) => {
    if (path.length === 1) return assoc(obj, first(path), value);
    const obj1 = _createObj(path, obj);
    const path1 = rest(path);
    const inner = assocIn(obj1, path1, value);
    return assoc(obj, first(path), inner);
});

export default assocIn;
