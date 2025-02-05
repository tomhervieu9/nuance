/**
 * An assertion function that throws an error if the condition is false.
 * @param condition - The condition to check.
 * @param message - The error message to throw if the condition is false.
 */
export const assert = (
  condition: boolean,
  message: string
): asserts condition => {
  if (!condition) {
    throw new Error(message);
  }
};
