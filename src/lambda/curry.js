const curry = (fn, arity = fn.length) => {

    const curried = (args = []) => (...more) => {

        const all  = args.concat(more);

        return (all.length < arity)
                ? curried(all)
                : fn(...all);
   };

   return curried();

 };

 export default curry;