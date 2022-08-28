//Calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial = 10
let fact = 1
let i = 0

while ( i < factorial) {
    i++
    fact = fact*i
    console.log(fact);
    if (i >= 10) {
        break;
    }
}