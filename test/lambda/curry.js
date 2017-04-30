/*global describe, it*/
import assert from 'assert';
import curry from '../../src/lambda/curry';

describe('curry', () => {

    const add = (a,b) => a + b;
    const addMany = (...xs) => xs.reduce((a,b) => a + b);


	describe('main functionality of curry', () => {

        it('should be of equal value (automatic arity)', () => {
            const addCurried = curry(add);
            const inc = addCurried(1);
			assert.equal(2, inc(1));
		});

        it('should be of equal value (fixed arity)', () => {
            const threePlus = curry(addMany, 5)(1,1,1);
            const fourPlus = threePlus(1);
			assert.equal(5, fourPlus(1));
		});

	});

});