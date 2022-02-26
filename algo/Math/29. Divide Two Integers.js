function mul(a, b) {
  let result = 0
  while (b > 0) {
    if (b & 1) result += a
    b >>= 1
    result += result
    a += a
  }

  return result
}
