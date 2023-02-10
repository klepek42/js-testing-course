import { it, expect, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";

vi.mock("fs");
vi.mock("path", () => {
	return {
		default: {
			// Custom logic for join fn
			join: (...args) => {
				// The last element of the args array
				return args[args.length - 1];
			}
		}
	};
});

it("should execute the writeFile method", () => {
	const testData = "Test";
	const testFileName = "test.txt";

	writeData(testData, testFileName)

	// return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
	// expect(fs.writeFile).toBeCalled();
	expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});