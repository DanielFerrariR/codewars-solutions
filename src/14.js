const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return 'Even'
  }

  return 'Odd'
}

console.log(evenOrOdd(process.argv[2]))
