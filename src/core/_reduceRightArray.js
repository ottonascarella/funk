
const _reduceRightArray = (funk, initial, coll) => {
    let res;
    let i = coll.length - 1;

    if (initial === undefined || initial === null) {
        initial = coll[i];
        i--;
    }

    while (i >= 0) {
        res = funk(coll[i], initial);
        initial = res;
        i--;
    }

    return res;
};

export default _reduceRightArray;