/*global describe, it*/

import assert from 'assert';
import filter from '../../src/core/filter';

describe('filter', () => {

	describe('main functionality for array', () => {

		it('should return [1]', () => {
			let array = [2,2,2,2,2,2,2,1,2,3];
			assert.deepEqual([1], filter(x => x !== 1, array));
		});

		it('should return [1]', () => {
			let array = [1];
			assert.deepEqual([1], filter(x => x !== 1, array));
		});

		it('should return []', () => {
			let array = [2,2,2];
			assert.deepEqual([], filter(x => x === 2, array));
		});

		it('should return []', () => {
			let array = [];
			assert.deepEqual([], filter(x => x === 2, array));
		});

	});

});