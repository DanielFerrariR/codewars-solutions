const reOrdering = (text) => {
  let word

  if (text.split(' ').length === 1) {
    return text
  }

  text.split(' ').forEach((element) => {
    if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) {
      word = element
      return 0
    }
  })

  const newText = text.split(' ')

  newText.splice(newText.indexOf(word), 1)
  newText.unshift(word)

  return newText.join(' ')
}

console.log(reOrdering(process.argv[2]))
