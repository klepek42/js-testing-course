import { cleanNumbers } from "./util/numbers"

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateResult(numbers) {
  let result = '';

  try {
    const numbers = cleanNumbers(numbers);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
}