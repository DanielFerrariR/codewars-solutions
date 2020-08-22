const namesSorter = (departmentsArray) => {
  return departmentsArray
    .toString()
    .split('')
    .join('')
    .split(',')
    .sort((a, b) => {
      if (a.length > b.length) {
        return 1
      }
      if (a.length < b.length) {
        return -1
      }
      if (a.length === b.length) {
        if (a > b) {
          return 1
        }
        if (b > a) {
          return -1
        }
      }
      return 0
    })
}

console.log(namesSorter(process.argv[2]))
