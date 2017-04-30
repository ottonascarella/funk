/*global describe, it*/
import assert from 'assert';
import compose from '../../src/lambda/compose';

describe('compose', () => {

    const args = [1,2];
    const add = (a,b) => a + b;
    const times7 = (x) => x * 7;
    const result = times7(add(...args));

	describe('main functionality of compose', () => {
        const composed = compose(times7, add);

        it('should be of equal value', () => {
			assert.equal(composed(...args), result);
		});

	});

});