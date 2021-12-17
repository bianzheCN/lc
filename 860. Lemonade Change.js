/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0

  for (bill of bills) {
    if (bill === 5) {
      five++
    } else if (bill === 10) {
      if (!five) return false

      ten++
      five--
    } else {
      // 20
      if (ten && five) {
        ten--
        five--
      } else if (five >= 3) {
        five -= 3
      } else {
        return false
      }
    }
  }

  return true
}
