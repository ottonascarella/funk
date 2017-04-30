
const _reduceArray = (funk, initial, coll) => {
    let res;
    let i = 0, l = coll.length;

    if (initial === undefined || initial === null) {
        initial = coll[i];
        i++;
    }

    while (i < l) {
        res = funk(initial, coll[i]);
        initial = res;
        i++;
    }

    return res;
};

export default _reduceArray;