/*global describe, it*/
import assert from 'assert';
import pipe from '../../src/lambda/pipe';

describe('pipe', () => {

    const args = [1,2];
    const add = (a,b) => a + b;
    const square = (x) => x * x;
    const result = square(add(...args));

	describe('main functionality of pipe', () => {

        const piped = pipe(add,square);

        it('should be of equal value', () => {
			assert.equal(piped(...args), result);
		});

	});

});