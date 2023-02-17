import { describe, it, expect, vi } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

const testReponseData = {testKey: "testData"};

// Our own fetch logic
const testFetch = vi.fn((url, options) => {
	return new Promise((resolve, reject) => {

		if (typeof options.body !== "string") {
			reject("Not a string!");
		}
		const testResponse = {
			ok: true,
			json() {
				return new Promise((resolve, reject) => {
					resolve(testReponseData);
				});
			},
		};
		resolve(testResponse);
	});
});

vi.stubGlobal("fetch", testFetch);

it('should return any available response data', () => {
	const testData = {key:"test"};
	
	return expect(sendDataRequest(testData)).resolves.toEqual(testReponseData);
});

it('should convert the provided data to JSON before sending the request', async () => {
	const testData = {key: "test"};

	let errorMessage;

	try {
		await sendDataRequest(testData);
	} catch (error) {
		errorMessage = error;
	}

	expect(errorMessage).not.toBe("Not a string!");
});

it('should throw an HttpError in case of non-okay responses', () => {
	testFetch.mockImplementationOnce((url, options) => {
		return new Promise((resolve, reject) => {

			if (typeof options.body !== "string") {
				reject("Not a string!");
			}
			const testResponse = {
				ok: false,
				json() {
					return new Promise((resolve, reject) => {
						resolve(testReponseData);
					});
				},
			};
			resolve(testResponse);
		});
	});

	const testData = {key:"test"};

	return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});