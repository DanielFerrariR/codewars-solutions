const moveZeros = (arr) => {
  const newArr = []
  let countZeros = 0

  for (let count = 0; count < arr.length; count += 1) {
    if (arr[count] !== 0) {
      newArr.push(arr[count])
    } else {
      countZeros += 1
    }
  }

  for (let count = 0; count < countZeros; count += 1) {
    newArr.push(0)
  }

  return newArr
}

console.log(moveZeros(process.argv[2]))
