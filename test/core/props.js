/*global describe, it*/

import assert from 'assert';
import props from '../../src/core/props';

describe('props', () => {

	describe('main functionality for array', () => {

		it('should return 3', () => {
			let array = [1,[0,1,2,[3]],4,5];
			assert.equal(3, props([1,3,0], array));
		});

		it('should return "stuff"', () => {
			let array = [1,2,[{a:1, b:[6,'stuff']},2]];
			assert.equal('stuff', props( [2,0,'b',1], array));
		});

		it('should return undefined', () => {
			let array = [1,2,[{a:1, b:[6,'stuff']},2]];
			assert.equal(undefined, props( [2,0,'c',1], array));
		});

		it('should return undefined', () => {
			assert.equal(undefined, props( [2,0,'c',1], undefined));
		});

	});


});