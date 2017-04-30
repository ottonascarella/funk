/*global describe, it*/

import assert from 'assert';
import assocIn from '../../src/core/assocIn';

describe('assocIn', () => {

	describe('main functionality for array', () => {

		it('should return [1,2,3]', () => {
			let array = [1,2];
			assert.deepEqual([1,2,3], assocIn(array, [2], 3));
		});

		it('should return [1,2,[1,2,3]]', () => {
			let array = [1,2,[1,2]];
			assert.deepEqual([1,2,[1,2,3]], assocIn(array, [2,2], 3));
		});

	});

	describe('main functionality for object', () => {

		it('should return {a:1, b:{c:[1,2]}, d:4}', () => {
			let result = {a:1, b:{c:[1,2]}, d:4};
			assert.deepEqual(result, assocIn({a:1, b: {c: [1]}, d:4}, ['b','c', 1], 2));
		});

		it('should return {a:1, b:{c:[1,2]}, d:4}', () => {
			let result = {a:1, b:{c:[1,2]}, d:4};
			assert.deepEqual(result, assocIn({a:1, b: {c: [1]}, d:4}, ['b','c', 1], 2));
		});

		it('should return {a:1, b:2, c:{d:[{e:\'AQUI\'}]}}', () => {
			let result = {a:1, b:2, c:{d:[{e:'AQUI'}]}};
			assert.deepEqual(result, assocIn({a:1, b:2}, ['c','d', 0, 'e'], 'AQUI'));
		});

	});

});