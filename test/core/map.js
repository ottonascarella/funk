/*global describe, it*/
import assert from 'assert';
import map from '../../src/core/map';

describe('map', () => {
	describe('main functionality for array', () => {
		let array = [1,2,3];
		it('should return notDeepEqual array', () => {
			assert.notDeepEqual(array, map(x => x + 1, array));
		});
		it('should return deepEqual array', () => {
			assert.notDeepEqual([2,3,4], map(x => x + 1, array));
		});
	});

	describe('main functionality for object', () => {
		let obj = {a: 1, b:2, c: 3};

		it('should return notdeepEqual object', () => {
			assert.notDeepEqual(obj, map(x => x + 1, obj));
		});

		it('should return deepEqual object', () => {
			assert.deepEqual({a: 2, b:3, c: 4}, map(x => x + 1, obj));
		});
	});

});