const findNextSquare = (number) => {
  let newNumber = number

  if (newNumber % Math.sqrt(newNumber) === 0) {
    const i = 0

    while (i === 0) {
      newNumber += 1

      if (newNumber % Math.sqrt(newNumber) === 0) {
        return newNumber
      }
    }
  }

  return -1
}

console.log(findNextSquare(process.argv[2]))
