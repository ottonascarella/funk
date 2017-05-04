/*global describe, it*/
import assert from 'assert';
import pluck from '../../src/core/pluck';

describe('pluck', () => {

	describe('main functionality', () => {
		let array = [
            {name: 'Otto', age: 37},
            {name: 'Hector', age: 3},
            {name: 'Ludi', age: 40},
            {name: 'Gabi', age: 35}
        ];
		it('should be deepEqual', () => {
			assert.deepEqual(['Otto', 'Hector', 'Ludi', 'Gabi'], pluck('name', array));
		});
		it('should return [undefined,undefined, undefined, undefined]', () => {
			assert.deepEqual([undefined,undefined, undefined, undefined], pluck('doce', array));
		});
		it('should return []', () => {
			assert.deepEqual([], pluck('doce', []));
		});
	});

});