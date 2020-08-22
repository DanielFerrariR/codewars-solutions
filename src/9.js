const persistence = (num) => {
  let newNum = num
  let count = 0

  while (newNum.toString().length > 1) {
    newNum = newNum
      .toString()
      .split('')
      .reduce((accum, curr) => accum * curr)
    count += 1
  }

  return count
}

console.log(persistence(process.argv[2]))
