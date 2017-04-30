const partial = (funk, ...args) => (
    (...more) => funk(...args.concat(more))
);

export default partial;