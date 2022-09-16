/*- Crea una variable con tu nombre

- Crea una variable con tu apellido

- Crea un objeto con tu nombre y tu apellido

- Almacena el objeto anterior en la SessionStorage

- Almacena el objeto anterior en la LocalStorage

- Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

- Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

- Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

- Observa cómo la SessionStorage está vacía

- Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

- Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado*/

let nombre = "Raul"
let apellido = "Nuñez"

sessionStorage.setItem(nombre)

let nombreCompleto = {nombre, apellido}
localStorage.setItem(nombreCompleto)

let dia = new Date()
let minutos = dia.getTime()
let agregarMin = 60 * 2000
let Minutos = new Date(dia + agregarMin)


document.cookie = "caducidad=nombreCompleto;expires=" + dia 
console.log(document.cookie)