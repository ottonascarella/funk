import curry from '../lambda/curry';

const prop = curry((name, coll) => {
    return (coll !== undefined)
        ? coll[name]
        : coll;
});

export default prop;