//DOM
/*let links = document.querySelectorAll("a");
links.forEach(function(link){
    console.log(link);
})

//MUESTRA LOS EVENTOS DEL USUARIO
let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })

});

//EVENTOS
//obtener elemnetos de la clase .close
let links = document.querySelectorAll(".close");
//recorresrlos
links.forEach(function(link){
    //agregar un evento click a cada una de ellos
    link.addEventListener("click",function(evento){
        evento.preventDefault(); //evita que se ejecute el comprotamiento por defecto, en este caso redirigir el link

    });

});

//funcion para remover o agregar clases (remove, add)
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
    icono.classList.remove("fa-star")
})*/
let links = document.querySelectorAll(".close");
    links.forEach(function(link){
        link.addEventListener("click",function(ev){
        ev.preventDefault();
        //recorre la clase content
        let content = document.querySelector(".content");
        //quita las clases de animación encontradas
        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeInDown");
        //agregar nuevas animaciones
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutDown");
        //set time out despues de n tiempo..1 vez
        //set interval lo hace en n tiempo n cantidad de veces
        setTimeout(function(){
            location.href = "/";
        },700);
        return false;
    });

});
