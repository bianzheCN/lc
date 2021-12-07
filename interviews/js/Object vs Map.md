# Object vs Map

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map]

## diffs

### Key types

Object: String / Symbol
Map: primitive types

### iterable

Object: not iterable, can use `Object.values()`, `Object.entries()`, `for...in`, `for...in` has a couple of restrictions: it only iterates over enumerable, non-Symbol properties and it does so in an arbitrary order.

Map: iterable and can use `for...of`, `forEach` to iterate. And you can get the number of entries by calling `map.size`

### performance

Map has a much better performance than Object in searching, adding and deleting

### But when using Map?

JSON data structure(no native support for serialization or parsing)
