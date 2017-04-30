/*global describe, it*/

import assert from 'assert';
import assoc from '../../src/core/assoc';

describe('assoc', () => {
	describe('main functionality for array', () => {
		let array = [1,2,3];
		it('should return different array', () => {
			assert.notDeepEqual(array, assoc(array,2,1));
		});
		it('should return "equal" array', () => {
			let barray = assoc(array,0,1);
			assert.notEqual(array, barray);
			assert.deepEqual(array, barray);
		});
	});

	describe('main functionality for object', () => {
		let obj = {a: 1, b:2, c:3};

		it('should return different object', () => {
			assert.notDeepEqual(obj, assoc(obj, 'd', 4));
		});

		it('should return "equal" object', () => {
			let bobject = assoc(obj, 'c', 3);
			assert.notEqual(obj, bobject);
			assert.deepEqual(obj, bobject);
		});
	});

});