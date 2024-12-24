# TypeScript Type Mismatch Bug

This repository demonstrates a common type error in TypeScript: passing an argument of the wrong type to a function.

## Bug Description
The `add` function is defined to accept two numbers and return their sum. However, the code attempts to call `add` with a string as the second argument. This leads to a type error.

## Solution
The solution involves ensuring that the arguments passed to the `add` function are always numbers. This can be achieved by adding input validation or type guards.