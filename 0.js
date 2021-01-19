const ordenado = (a) => {
    console.log(a)
    console.log(a.sort())

    console.log(a.sort((a, b) => a.length - b.length))
}

ordenado([ "constituição", "anel", "músculo", "oi", "pedra", "zumb", "casa"])
