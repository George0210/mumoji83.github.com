
// función para cambiar el ícono de la barra

let changeIcon = function(icon) {

    icon.classList.toggle("fa-times");

}

// funccion para mostrar el menú de navegación

function mostrarOcultar() {

    var cont = document.getElementsByClassName("navBar")[0];

    let icon = document.querySelector(".fa-bars");

    if (cont.style.display == "initial" ) {

        cont.style.display = "none";

    } else {

        cont.style.display = "initial";
        
    }
}