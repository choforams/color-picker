const color = document.querySelector("#color");
const salida = document.querySelector("#salida")

// eventos
color.addEventListener("input", () => {
    console.log(color.value)
    salida.innerHTML=color.value
    salida.style.background = color.value
    salida.style.color ="#FFF"
})
