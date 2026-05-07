# Assignment - 01
# TypeScript Solutions README

## Problem 01: `filterEvenNumbers`

`filterEvenNumbers(values: number[]): number[]` takes an array of numbers and returns a new array containing only the even values.

How it works:

- Creates an empty array for even numbers.
- Loops through each number in the input array.
- Checks whether the number is divisible by 2.
- Adds only the even values to the result.

Example result:

- Input: `[1, 2, 3, 4, 5, 6]`
- Output: `[2, 4, 6]`

## Problem 02: `reverseString`

`reverseString(text: string): string` reverses the characters in a string and returns the reversed string.

How it works:

- Starts from the last character in the string.
- Moves backward to the first character.
- Builds a new reversed string one character at a time.

Example result:

- Input: `"hello"`
- Output: `"olleh"`

## Problem 03: `checkType`

`checkType(value: StringOrNumber): StringOrNumber` checks whether the provided value is a number or a string.

How it works:

- Uses `typeof` to inspect the value.
- Returns `"Number"` when the input is a number.
- Returns `"String"` when the input is a string.

Note:

- The function uses the union type `StringOrNumber = string | number` to allow either type as input.

## Problem 04: `getProperty`

`getProperty<T>(obj: T, key: keyof T)` is a generic helper that returns the value of a property from an object.

How it works:

- Uses a generic type `T` so the function works with any object type.
- Uses `keyof T` to ensure the key is valid for that object.
- Returns the value at the given key.

Why it is useful:

- Keeps the function reusable.
- Prevents invalid property access at compile time.

## Problem 05: `toggleReadStatus`

`toggleReadStatus(book: IBook)` creates a new book object and adds an `isRead` property set to `true`.

How it works:

- Accepts a book object that follows the `IBook` interface.
- Copies all existing book properties using the spread operator.
- Adds `isRead: true` to the new object.

Note:

- Despite the name, this function does not actually toggle between `true` and `false`; it always sets `isRead` to `true`.

## Problem 06: `Person` and `Student`

`Person` is a base class that stores a person's `name` and `age`.

How it works:

- The constructor receives `name` and `age`.
- Those values are assigned to the instance.

`Student` extends `Person` and adds a `grade` property.

How it works:

- Calls `super(name, age)` to initialize the parent class.
- Stores the student's grade.
- Provides `getDetails()` to return a formatted description of the student.

Example result from `getDetails()`:

- `Name: Alex, Age: 20, Grade: A`

## Problem 07: `getIntersection`

`getIntersection(array1: number[], array2: number[]): number[]` returns the numbers that appear in both arrays.

How it works:

- Uses `filter()` to loop through the first array.
- Checks whether each value also exists in the second array using `includes()`.
- Returns only the shared values.

Example result:

- Input: `[1, 2, 3, 4, 5, 6]` and `[3, 4, 5, 6, 7, 8, 9]`
- Output: `[3, 4, 5, 6]`

## Demo Values At The Bottom

The arrays `arr1` and `arr2` are sample inputs used to test `getIntersection`.

The final `console.log(getIntersection(arr1, arr2))` line prints the overlapping values in both arrays.

## Summary

This file demonstrates several TypeScript fundamentals:

- Array filtering
- String manipulation
- Union types
- Generics
- Interfaces
- Classes and inheritance
- Array intersection logic

Together, these examples show how TypeScript can be used to write safer and more reusable code.

