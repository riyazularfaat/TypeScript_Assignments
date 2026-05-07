# How Generics in TypeScript Help Build Reusable and Strictly Typed Code

## Introduction

When building applications in TypeScript, developers often create functions and components that work with different types of data. Without proper typing, this flexibility can lead to unsafe code and runtime errors. This is where **Generics** become powerful.

Generics allow developers to write reusable code while still preserving strict type safety. Instead of creating separate functions for numbers, strings, or objects, you can create one flexible function that adapts to any data type passed into it.

In this blog, we will explore how Generics work in TypeScript and how they help create reusable, maintainable, and type-safe components and functions.

---

# What Are Generics in TypeScript?

Generics are a feature in TypeScript that allow functions, classes, interfaces, and components to work with multiple data types while maintaining type information.

A generic type is represented using angle brackets (`<>`) with a placeholder type, commonly written as `T`.

## Basic Example Without Generics

```typescript
function identity(value: any): any {
    return value;
}

console.log(identity(10));
console.log(identity("Hello"));
```

The problem here is that `any` removes type safety. TypeScript cannot determine what type is returned.

---

# Using Generics for Type Safety

Now let's rewrite the same function using Generics.

```typescript
function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello"));
```

## How It Works

- `T` acts as a placeholder for a type.
- The function accepts a value of type `T`.
- It also returns the same type `T`.
- TypeScript automatically preserves the type information.

This ensures strong typing while keeping the function reusable.

---

# Why Generics Are Important

Generics provide several important advantages:

## 1. Reusability

One function can work with many data types.

```typescript
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(["A", "B", "C"]));
```

Instead of writing separate functions for numbers and strings, one generic function handles all cases.

---

## 2. Type Safety

Generics prevent invalid operations.

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const result = merge(
    { name: "John" },
    { age: 25 }
);

console.log(result.name);
console.log(result.age);
```

TypeScript correctly understands that `result` contains both `name` and `age`.

---

## 3. Better Code Maintainability

Generic code reduces duplication and makes programs easier to maintain.

Without generics, developers often repeat similar logic for different data types. Generics eliminate this repetition.

---

# Generics in Interfaces

Generics can also be used with interfaces.

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
}

const userResponse: ApiResponse<string> = {
    success: true,
    data: "User Loaded"
};

const productResponse: ApiResponse<number> = {
    success: true,
    data: 500
};
```

Here, the same interface works with different types of response data.

---

# Generics in Classes

Generics make classes flexible and reusable.

```typescript
class Storage<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    getItems(): T[] {
        return this.data;
    }
}

const numberStorage = new Storage<number>();

numberStorage.addItem(10);
numberStorage.addItem(20);

console.log(numberStorage.getItems());
```

This class can now store any type while preserving strict typing.

---

# Generic Constraints

Sometimes you may want to restrict the types allowed in a generic.

```typescript
interface Length {
    length: number;
}

function printLength<T extends Length>(item: T): void {
    console.log(item.length);
}

printLength("Hello");
printLength([1, 2, 3]);
```

The constraint `extends Length` ensures that only values with a `length` property are accepted.

---

# Real-World Use Cases of Generics

Generics are widely used in:

- API response handling
- React components
- Database models
- Utility functions
- Collections and data structures

For example, React uses Generics heavily for reusable components and hooks.

```typescript
function displayData<T>(data: T): void {
    console.log(data);
}
```

This flexibility is essential in large-scale applications.

---

# Advantages of Using Generics

| Advantage | Description |
|---|---|
| Reusability | One function/class works with multiple types |
| Type Safety | Prevents runtime type errors |
| Cleaner Code | Reduces duplicate code |
| Scalability | Easier to expand large projects |
| Better IntelliSense | Improved auto-completion and editor support |

---

# Conclusion

Generics are one of the most powerful features of TypeScript. They allow developers to build reusable components and functions without sacrificing strict type safety.

By using Generics, developers can write flexible, maintainable, and scalable code that adapts to different data structures while still benefiting from TypeScript’s compile-time checking.

Whether you are creating utility functions, APIs, classes, or React components, Generics help ensure that your code remains both reusable and reliable.
