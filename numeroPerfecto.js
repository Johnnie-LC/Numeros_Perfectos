const numeroPerfecto = (num) => {
  if (typeof num === 'number') {
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
    console.log('Intenta ingresar un numero')
  }
}

module.exports = { numeroPerfecto }
