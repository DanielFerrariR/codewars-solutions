const isIsogram = (str) => {
  if (!str) {
    return true
  }

  let count = 0

  const newStr = str.toLowerCase()

  for (let i = 0; i <= newStr.length; i += 1) {
    for (let j = i + 1; j <= newStr.length; j += 1) {
      if (newStr[i] === newStr[j]) {
        count += 1
      }
    }
  }

  if (count > 0) {
    return false
  }

  return true
}

console.log(isIsogram(process.argv[2]))
