import curry from '../lambda/curry';
const takeWhile = curry((pred, coll) => {
    let i = 0;
    while (pred(coll[i])) i++;
    return coll.slice(0, i);
});
export default takeWhile;