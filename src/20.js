const longestConsecutive = (words, consecutiveQuantity) => {
  let biggestString = ''

  if (words.length < consecutiveQuantity || consecutiveQuantity <= 0) {
    return biggestString
  }

  for (const [index] of words.entries()) {
    let concatenatedWord = ''
    let currentPosition = 0

    while (currentPosition !== consecutiveQuantity) {
      if (!words[index + currentPosition]) break
      concatenatedWord += words[index + currentPosition]
      currentPosition += 1
    }

    if (concatenatedWord.length > biggestString.length) {
      biggestString = concatenatedWord
    }
  }

  return biggestString
}

console.log(
  longestConsecutive(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)
)

// function longestConsec(strarr, k) {
//   var longest = ''
//   for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
//     var tempArray = strarr.slice(i, i + k)
//     var tempStr = tempArray.join('')
//     if (tempStr.length > longest.length) {
//       longest = tempStr
//     }
//   }
//   return longest
// }
