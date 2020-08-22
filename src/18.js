const list = (names) => {
  let final = ''

  for (let i = 0; i < names.length; i += 1) {
    if (i === names.length - 2) {
      final += `${names[i].name} & `
    } else if (i === names.length - 1) {
      final += names[i].name
    } else {
      final += `${names[i].name}, `
    }
  }

  return final
}

console.log(list(process.argv[2]))
