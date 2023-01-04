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

it('should transform array to number', () => {
	const input = [2];

	const result = transformToNumber(input);

	expect(result).toBe(2);
});

it('should not transform a string string to number', () => {
	const input = "text";

	const result = transformToNumber(input);
	expect(result).toBeNaN();
});
