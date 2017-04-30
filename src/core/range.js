const range = (a,b) => {

    let res = [], i;

    if (b !== undefined) {
        for (i = a; i < b; i++) res.push(i);
    } else {
        for (i = 0; i < a; i++) res.push(i);
    }

    return res;
};

export default range;