/*Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/

const lista = [
    "Queso",
    "Jamon",
    "Arroz",
    "Jugo",
    "Azucar"
]

lista.push("Aceite de Girasol")
console.log(lista)
lista.pop()
console.log(lista)

const peliculas = [
    {titulo:"Batman: El caballero de la noche", director:"Christopher Nolan", fecha: 2008},
    {titulo:"Batman: El caballero de la noche asciende", director:"Christopher Nolan", fecha: 2012},
    {titulo:"Avengers: End Game", director:"Joe Russo", fecha: 2018}
]

const peliculas2010 = peliculas.filter(valor => valor.fecha < 2010)
console.log(peliculas2010)

const directores = peliculas.map(directores => directores.director)
console.log(directores)

const titulos = peliculas.map(a => a.titulo)
console.log(titulos)

const directorTitulo = titulos.concat(directores)
console.log(directorTitulo)

const tituloDirector = [...directores, ...titulos]
console.log(tituloDirector)