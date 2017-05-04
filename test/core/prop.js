/*global describe, it*/

import assert from 'assert';
import prop from '../../src/core/prop';

describe('prop', () => {

	describe('main functionality for array', () => {

		it('should return 3', () => {
			let array = [1,1,1,3];
			assert.equal(3, prop(3, array));
		});

		it('should return "stuff"', () => {
			let array = [1,2,'stuff'];
			assert.equal('stuff', prop(2, array));
		});

		it('should return "wow"', () => {
			let array = {a:1, b:2, thang: 'wow'};
			assert.equal('wow', prop('thang', array));
		});

		it('should return undefined', () => {
			assert.equal(undefined, prop('stuff', undefined));
		});

	});


});