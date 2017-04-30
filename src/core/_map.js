const _map = (funk, coll) => {
    const l = coll.length;
    let i = 0;
    let acc = new Array(l);
    while (i++ < l) {
        acc[i] = funk(coll[i]);
    }
    return acc;
};

export default _map;