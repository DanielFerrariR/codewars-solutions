const duplicateCount = (text) => {
  const newArr = []
  const newText = text.toLowerCase().split('')

  for (let loopA = 0; loopA < newText.length; loopA += 1) {
    for (let loopB = loopA + 1; loopB < newText.length; loopB += 1) {
      if (newText[loopA] === newText[loopB]) {
        if (newArr.indexOf(newText[loopA]) < 0) {
          newArr.push(newText[loopA])
        }
      }
    }
  }

  return newArr.length
}

console.log(duplicateCount(process.argv[2]))
