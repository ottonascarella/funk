/*global describe, it*/
import assert from 'assert';
import partial from '../../src/lambda/partial';

describe('partial', () => {

    const addMany = (...xs) => xs.reduce((a,b) => a + b);

	describe('main functionality of partial', () => {

        it('should be of equal value (fixed arity)', () => {
            const fourPlus = partial(addMany, 1, 1, 1, 1);
			assert.equal(5, fourPlus(1));
		});

	});

});