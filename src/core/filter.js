import curry from '../lambda/curry';
const filter = curry((pred, coll) => {
    let res = [];

    for (let i = 0, l = coll.length; i < l; i++) {
        if (!pred(coll[i])) res.push(coll[i]);
    }

    return res;
});
export default filter;
