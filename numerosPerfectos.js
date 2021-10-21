const { numeroPerfecto } = require('./numeroPerfecto')

const numerosPerfectos = (n) => {
  if (typeof n === 'number') {
    n = Math.floor(n)

    if (n > 4) {
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
  } else {
    console.error('debes ingresar un numero entero')
  }
}
module.exports = { numerosPerfectos }
