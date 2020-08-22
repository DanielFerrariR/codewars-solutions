const streetFighterSelection = (fighters, position, moves) => {
  const characters = []
  const newPosition = position.slice()

  moves.forEach((element) => {
    switch (element) {
      case 'up':
        if (newPosition[1] === 1) {
          newPosition[1] -= 1
        }
        break
      case 'down':
        if (newPosition[1] === 0) {
          newPosition[1] += 1
        }
        break
      case 'left':
        if (newPosition[0] === 0) {
          newPosition[0] = 5
        } else {
          newPosition[0] -= 1
        }
        break
      case 'right':
        if (newPosition[0] === 5) {
          newPosition[0] = 0
        } else {
          newPosition[0] += 1
        }
        break
      default:
        break
    }

    characters.push(fighters[newPosition[1]][newPosition[0]])
  })

  return characters
}

console.log(
  streetFighterSelection(process.argv[2], process.argv[3], process.argv[4])
)
