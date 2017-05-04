const _map = (funk, coll) => {
    const l = coll.length;
    let i = 0,
        acc = new Array(l);
    for (; i < l; i++) {
        acc[i] = funk(coll[i]);
    }
    return acc;
};

export default _map;