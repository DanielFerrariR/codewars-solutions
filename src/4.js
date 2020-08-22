const ArithmeticSequenceSum = (a, r, n) => {
  if (n > 0) {
    return a + r * (n - 1) + ArithmeticSequenceSum(a, r, n - 1)
  }

  return 0
}

console.log(
  ArithmeticSequenceSum(process.argv[2], process.argv[3], process.argv[4])
)
