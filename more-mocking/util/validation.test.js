import { describe, it, expect } from "vitest";
import { validateNotEmpty } from "./validation";

describe('function validateNotEmpty', () => {
	const testErrorMessage = "The text is empty. Please provide a text!";

	it('should throw ValidationError if text is empty', () => {
		const testText = "";

		const validationFn = () => validateNotEmpty(testText);
		expect(validationFn).toThrow();
	});

	it('should throw ValidationError with provided errorMessage if text is empty', () => {
		const testText = "";

		const validationFn = () => validateNotEmpty(testText, testErrorMessage);
		expect(validationFn).toThrow(testErrorMessage);
	});

	it('should throw ValidationError with provided errorMessage if text is empty', () => {
		const testText = "   ";

		const validationFn = () => validateNotEmpty(testText, testErrorMessage);
		expect(validationFn).toThrow();
	});

	it('should not throw a ValidationError if text is not empty', () => {
		const testText = "Hello world";

		const validationFn = () => validateNotEmpty(testText, testErrorMessage);
		expect(validationFn).not.toThrow();
	});
});