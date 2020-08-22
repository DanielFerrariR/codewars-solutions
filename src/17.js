const isTriangle = (a, b, c) => {
  return !!(a + b > c && a + c > b && b + c > a)
}

console.log(isTriangle(process.argv[2], process.argv[3], process.argv[4]))
