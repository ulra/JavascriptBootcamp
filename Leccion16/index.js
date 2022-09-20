/*
- Replica el ejercicio completo del vídeo

- Añade dos párrafos más en cada una de las secciones

- Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)

- Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine
*/

const parrafo = document.querySelectorAll(".parrafo")
const seccion = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".papelera")


parrafo.forEach(parrafo => {
    parrafo.addEventListener("dragstart", e =>{
      console.log("estoy arrastrando el parrafo " + parrafo.innerText)
        parrafo.classList.add("drag")
        e.dataTransfer.setData("id", parrafo.id)
        const elemento = document.querySelector(".fantasma")
        e.dataTransfer.setDragImage(elemento, 0, 0)
    })

    parrafo.addEventListener("dragend", () =>{
        console.log("terminado de arrastrar")
        parrafo.classList.remove("drag")
    })
})

seccion.forEach(seccion => {
    seccion.addEventListener("dragover", e => {
        e.preventDefault()
       // console.log("Drag over")
    })
    seccion.addEventListener("drop", event => {
        const idPrrafo = event.dataTransfer.getData("id")
        console.log(idPrrafo)
        const parrafo = document.getElementById(idPrrafo)
        seccion.appendChild(parrafo)
    })
})

papelera.addEventListener("dragover", e => {
    e.preventDefault()
})
papelera.addEventListener("drop", e => {
    console.log("drop papelera")
        const idPrrafo = e.dataTransfer.getData("id")
        const parr = document.getElementById(idPrrafo)
        parr.remove()
})