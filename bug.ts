function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, "10"); // Type Error: Argument of type 'string' is not assignable to parameter of type 'number'.