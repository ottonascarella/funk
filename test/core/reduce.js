/*global describe, it*/
import assert from 'assert';
import reduce from '../../src/core/reduce';
import foldl1 from '../../src/core/foldl1';

describe('reduce, foldl and foldl1', () => {
	describe('main functionality for array', () => {

		let array = [1,2,3];

		it('should return sum of the array', () => {
			assert.equal(6, foldl1( (a,b) => a + b, array) );
		});

        it('should return deepEqual of the Object', () => {
			assert.deepEqual( {a1: 1, a2:2, a3:3}, reduce( (obj, n) => {
                obj['a' + n] = n;
                return obj;
            } , {}, array));
		});

	});

	describe('main functionality for object', () => {
		let obj = {a: 1, b:2, c: 3};

		it('should return deepEqual object', () => {
			assert.deepEqual( [1, 2, 3], reduce( (acc, [k,v]) => {
                acc.push(v);
                return acc;
            }, [], obj));
		});

		it('should return sum of values of object', () => {
			assert.deepEqual(6, reduce((x, [k,v]) => x + v, 0, obj));
		});
	});

});