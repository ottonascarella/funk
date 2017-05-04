const curry = (funk, arity = funk.length) => {

    const curried = (args = []) => (...more) => {

        const all  = args.concat(more);

        return (all.length < arity)
                ? curried(all)
                : funk(...all);
   };

   return curried();

 };

 export default curry;