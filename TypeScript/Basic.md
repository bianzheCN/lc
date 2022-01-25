# Basic

## Why

While the size, scope, and complexity of programs written in JavaScript has grown exponentially,
the ability of JavaScript language to express the relationships between different units of code has not.

Combined with JavaScript's peculiar runtime semantics, this mismatch between language and program complexity has made JavaScript development a difficult task to manage at scale

## Benefit

The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs

## Type System

By understanding how JavaScript works, TypeScript can build a type system that accepts JavaScript but has types.

### Types by Inference

In creating a variable and assigning it to a particular value, TypeScript will use the value as its type

### Extended Types besides JS primitive

This means that besides `boolean`, `bigint`, `null`, `number`, `string`, `symbol` and `undefined`, TS extends this list with a few more, such as:

`any`: allow anything,
`unknown`: ensure someone using this type declares what the type is,
`never`: it's not possible that this type could happen
`void`: a function which returns undefined or has no return value

### Composing Types

#### Why

To create complex types by combining simple ones. There are two ways: unions and generics

#### Unions

To declare a type could be one of many types.

#### Generics

To provide variables to types.

## Structural Type System

One of TypeScript's core principles is that type checking focuses on the *shape* that values have. This is sometimes called "duck typing" and "structural typing".

### Type checking

- In a structural type system, if two objects have the same shape, they are considered to be of the same type.
- the shape-matching only requires a subset of the object's fields to match
