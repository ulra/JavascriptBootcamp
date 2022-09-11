/*Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos*/

//funcion true
function verdadero(){
    return true
}

console.log(verdadero())

//promesa
const asincrona = new Promise((res, rej) =>{
setTimeout(() => {
    if(true){
        res()
    }else{
        rej()
    }
}, 5000)
})

asincrona
.then(() => console.log("hola soy una promesa"))
.catch(() => console.log("ERROR"))


//Funcion generadora de pares
function* generadoras(){
    let i = 0
    while(true){
        i=i+2
        yield i
    }
}
const gen = generadoras()
console.log(gen.next())
console.log(gen.next())