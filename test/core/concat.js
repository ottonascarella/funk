/*global describe, it*/

import assert from 'assert';
import concat from '../../src/core/concat';

describe('concat', () => {

	describe('main functionality for array', () => {

		it('should return [1,2,3,4]', () => {
			assert.deepEqual([1,2,3,4], concat([1],[2],[3,4]));
		});

		it('should return [1]', () => {
			assert.deepEqual([1], concat([],[],[1]));
		});

	});

});