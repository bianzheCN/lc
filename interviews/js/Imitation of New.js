/**
 *
 * @param {Function} constructor
 * @param  {...any} args
 * @returns
 */
function _create(constructor, ...args) {
  // create a empty object
  const obj = {}

  // set the prototype as this obj's __proto__
  Object.setPrototypeOf(obj, constructor.prototype)

  // run the constructor as make it's this as the obj we created literally
  const result = constructor.apply(obj, args)

  // return the result if it's Object type or obj we created
  return typeof result === "object" ? result : obj
}
