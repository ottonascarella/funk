const concat = (coll, ...args) =>
    args.reduce((coll, other) => coll.concat(other), coll);

export default concat;