/*Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/

const datos = {
    nombre: "Raul",
    apellido: "Nuñez",
    edad: 27,
    altura: 170,
    eresDesarrollador: true
}

const edad = datos.edad
console.log(edad)

const lista = [datos.nombre, datos.apellido, datos.edad, datos.altura, datos.eresDesarrollador]
console.log(lista)

const amigos = [
    {
        nombre: "Pedro",
        apellido: "Latouche",
        edad: 28,
        altura: "170",
        esDesarrollador: false 
    },

    {
        nombre: "Jose",
        apellido: "Rivero",
        edad: 31,
        altura: 178,
        esDesarrollador: false
    }
]

const lista2 = amigos.sort((a, b) => b.edad - a.edad)
console.log(lista2)