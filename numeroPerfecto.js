const numeroPerfecto = (num) => {
  if (typeof num === 'number') {
    num = Math.floor(num)

    let divisores = []

    for (let i = 0; i < num; i++) {
      if (num % i === 0) {
        divisores.push(i)
      }
    }

    const sumaDivisores = divisores.reduce((prev, curr) => prev + curr)

    if (sumaDivisores === num) {
      //es un numero perfecto
      return sumaDivisores
    } else {
      return 0
    }
  } else {
    console.error('Debes ingresar un numero entero')
  }
}

module.exports = { numeroPerfecto }
