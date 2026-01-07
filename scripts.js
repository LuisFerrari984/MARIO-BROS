const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function CliqueiNoBotao() {
    form.style.left = "20%"
    form.style.transform = "translateX;(-50%)"
    mascara.style.visibility = "visible"

}
function EscorderFormulario() {
    form.style.left = "-300px"
    form.style.transform = "translateX;(0)"
    mascara.style.visibility = "hidden"

}





