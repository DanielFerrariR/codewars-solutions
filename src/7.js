const moonRating = (rating) => {
  let stringMoonRating = ''
  let rounded = Math.round(rating)

  for (let i = 0; i < 5; i += 1) {
    if (rounded >= 2) {
      stringMoonRating += 'o'
      rounded -= 2
    } else if (rounded === 1) {
      stringMoonRating += 'c'
      rounded -= 1
    } else {
      stringMoonRating += 'x'
    }
  }

  return stringMoonRating
}

console.log(moonRating(process.argv[2]))
