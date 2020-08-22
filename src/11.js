const anagramCounter = (wordsArray) => {
  let counter = 0

  for (let loopA = 0; loopA < wordsArray.length; loopA += 1) {
    for (let loopB = loopA + 1; loopB < wordsArray.length; loopB += 1) {
      if (
        wordsArray[loopA].split('').sort().join('') ===
        wordsArray[loopB].split('').sort().join('')
      ) {
        counter += 1
      }
    }
  }

  return counter
}

console.log(anagramCounter(process.argv[2]))
