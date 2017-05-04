import curry from '../lambda/curry';

const props = curry((path, coll) => {
    let inner = coll, first, rest = path;
    while (inner !== undefined && rest && rest.length) {
        [first, ...rest] = rest;
        inner = inner[first];
    }
    return inner;
});
export default props;