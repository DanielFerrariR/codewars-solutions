const repeatStr = (n, s) => {
  if (n > 1) {
    return s + repeatStr(n - 1, s)
  }

  return s
}

console.log(repeatStr(process.argv[2], process.argv[3]))
