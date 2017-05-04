const rest = (coll) => {
    if (Array.isArray(coll)) return coll.slice(1);
    return undefined;
};
export default rest;