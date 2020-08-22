const findMissingLetter = (array) => {
  for (let i = 1; i < array.length; i += 1) {
    if (array[i].charCodeAt() !== array[i - 1].charCodeAt() + 1) {
      return String.fromCharCode(array[i].charCodeAt() - 1)
    }
  }

  return ''
}

console.log(findMissingLetter(process.argv[2]))
