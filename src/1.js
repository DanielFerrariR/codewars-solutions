const accum = (str) => {
  const arr = str.toLowerCase().split('')
  const final = []

  for (let count = 0; count < arr.length; count += 1) {
    if (count < arr.length - 1) {
      final.push(`${arr[count].toUpperCase() + arr[count].repeat(count)}-`)
    } else {
      final.push(arr[count].toUpperCase() + arr[count].repeat(count))
    }
  }

  return final.join('')
}

console.log(accum(process.argv[2]))
