import { describe, it, expect } from "vitest";
import { convertResultText } from "./parser";

describe('convertResultText()', () => {
	it('should return a string , no matter which values is passed in', () => {
		const val1 = 1;
		const val2 = 'invalid';
		const val3 = false;

		const result1 = convertResultText(val1);
		const result2 = convertResultText(val2);
		const result3 = convertResultText(val3);

		expect(result1).toBeTypeOf("string");
		expect(result2).toBeTypeOf("string");
		expect(result3).toBeTypeOf("string");
	});
});
