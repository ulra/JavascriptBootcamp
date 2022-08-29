//- Una variable que contenga tu altura en centímetros (entero)

//- Una variable que contenga tu altura en metros (número de coma flotante)

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)

//- Una variable que contenga tu altura en metros redondeada hacia arriba

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let altura = 175
let alturaMetro = 1.75
let peso = 70.82
let pesoDecimal = peso.toFixed(2)
let alturaRedondeada = alturaMetro.toFixed()
let pesoRedondeado = Math.floor(peso)
let maximo = Number.MAX_VALUE + 1 