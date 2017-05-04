import prop from './prop';

const last = (coll) => {
    return (Array.isArray(coll))
                ? prop(coll.length - 1, coll)
                : undefined;
};
export default last;