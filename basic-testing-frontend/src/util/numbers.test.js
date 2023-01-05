import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it('should transform a string number to number', () => {
	const input = "1";

	const result = transformToNumber(input);

	expect(result).toBe(1);
});

it('should transform number to number', () => {
	const input = 2;

	const result = transformToNumber(input);

	expect(result).toBe(2);
});


it('should not transform a text string to number', () => {
	const input = "text";

	const result = transformToNumber(input);
	expect(result).toBeNaN();
});

it('should yield NaN for non-transformable values', () => {
	const input = "invalid";
	const input2 = {};

	const result = transformToNumber(input);
	const result2 = transformToNumber(input2);

	expect(result).toBeNaN();
	expect(result2).toBeNaN();
});