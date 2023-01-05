import { it, expect } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

it('should throw error when string is empty', () => {
	const input = "";

	const resultFn = () => {
		validateStringNotEmpty(input);
	}

	expect(resultFn).toThrow(/Invalid input - must not be empty./);
});

it('should not throw an error when input is valid', () => {
	const input = "Valid text";

	const resultFn = () => {
		validateStringNotEmpty(input)
	}

	expect(resultFn).not.toThrow("Invalid input - must not be empty.");
});


it('should throw error when number input is invalid', () => {
	const input = "A text";

	const resultFn = () => {
		validateNumber(input);
	}

	expect(resultFn).toThrow("Invalid number input.");
});

it('should not throw an error when number input is valid', () => {
	const input = 1;

	const resultFn = () => {
		validateNumber(input);
	}

	expect(resultFn).not.toThrow("Invalid number input.");
});
