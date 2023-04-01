let menuInvisible=false;
//funciona para ocultar y mostrar el munu
function mostrarOcultarMenu(){
    if(menuInvisible){
        document.getElementById("nav").classList="";
        menuInvisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuInvisible = true;
    }

}
function seleccionar(){
    document.getElementById("nav").classList="";
    menuInvisible = false;

}

let $form = document.querySelector('#form');
$form.addEventListener('submit',handleSubmit)

/*para no recargar la página*/
function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    let nombre = (form.get('nombre'))
    let numero = (form.get('numero'))
    let mail = (form.get('mail'))
    let asunto = (form.get('asunto'))
    let mensaje = (form.get('mensaje'))
    window.location.href = `mailto:luis.rojas.240980@gmail.com$subjet=envioDesdeFormulario&
    body=nombre%3A${nombre}%0Anumero%3A${numero}%0Amail%3A${mail}%0Aasunto%3A${asunto}%0Amensaje%3A${mensaje}%0A`
    /*envío los datos */
}

