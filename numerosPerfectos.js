const { numeroPerfecto } = require('./numeroPerfecto')

const numerosPerfectos = (n) => {
  if (n > 2) {
    let numeros = []

    for (let i = 2; i < n; i++) {
      if (numeroPerfecto(i) !== 0) {
        numeros.push(numeroPerfecto(i))
      }
    }
    return numeros
  } else {
    return []
  }
}
module.exports = { numerosPerfectos }
