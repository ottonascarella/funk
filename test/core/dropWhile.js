/*global describe, it*/

import assert from 'assert';
import dropWhile from '../../src/core/dropWhile';

describe('dropWhile', () => {

	describe('main functionality for array', () => {

		it('should return [1,2,3]', () => {
			let array = [2,2,2,2,2,2,2,1,2,3];
			assert.deepEqual([1,2,3], dropWhile(x => x === 2, array));
		});

		it('should return [1]', () => {
			let array = [1];
			assert.deepEqual([1], dropWhile(x => x === 2, array));
		});

		it('should return [5,5,5]', () => {
			let array = [5,5,5];
			assert.deepEqual([5,5,5], dropWhile(x => x === 2, array));
		});

		it('should return []', () => {
			let array = [];
			assert.deepEqual([], dropWhile(x => x === 2, array));
		});

	});

});