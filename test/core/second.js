/*global describe, it*/

import assert from 'assert';
import second from '../../src/core/second';

describe('second', () => {

	describe('main functionality', () => {

		it('should return 1', () => {
			let array = [3,1,1,3];
			assert.equal(1, second(array));
		});

		it('should return undefined', () => {
			let array = [1];
			assert.equal(undefined, second(array));
		});

		it('should return undefined', () => {
			assert.equal(undefined, second(undefined));
		});

		it('should return undefined', () => {
			assert.equal(undefined, second({a:1}));
		});

	});


});