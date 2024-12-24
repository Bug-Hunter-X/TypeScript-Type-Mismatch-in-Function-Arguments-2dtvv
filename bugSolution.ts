function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return a + b;
}

let result1 = add(5, 10); // Correct: Returns 15

let result2 = add(5, "10"); // Throws an error