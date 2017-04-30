import curry from '../lambda/curry';

const assoc = curry((obj, key, val) => {
    let res;

    if (Array.isArray(obj)) {

        res = [...obj];
        res[key] = val;

    } else {

        res = Object.assign({}, obj, {[key]: val});

    }

    return res;
});

export default assoc;