const number = (busStops) => {
  let total = 0

  for (let i = 0; i < busStops.length; i += 1)
    total += busStops[i].reduce(
      (accumulator, currentValue) => accumulator - currentValue
    )

  return total
}

console.log(number(process.argv[2]))
