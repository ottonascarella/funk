/*global describe, it*/

import assert from 'assert';
import first from '../../src/core/first';

describe('first', () => {

	describe('main functionality', () => {

		it('should return 3', () => {
			let array = [3,1,1,3];
			assert.equal(3, first(array));
		});

		it('should return undefined', () => {
			let array = [];
			assert.equal(undefined, first(array));
		});

		it('should return undefined', () => {
			assert.equal(undefined, first(undefined));
		});

		it('should return undefined', () => {
			assert.equal(undefined, first({a:1}));
		});

	});


});