import curry from '../lambda/curry';
const dropWhile = curry((pred, coll) => {
    let i = 0;
    while (pred(coll[i])) i++;

    return coll.slice(i);
});export default dropWhile;
