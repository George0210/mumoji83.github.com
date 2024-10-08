
// function mostrarOcultar() {
//   var cont = document.getElementsByClassName("navbar")[0];

//   let icon = document.querySelector(".fa-bars");

//   if (cont.style.display == "initial") {
    
//     cont.style.display = "none";

//   } else {

//     cont.style.display = "initial";

//   }
// }

/*
function mostrarOcultar() {
  var cont = document.getElementsByClassName("navbarc");

  if (cont.style.visibility == "hidden") {
    
    cont.style.visibility = "visible";

  } else {
    
    cont.style.visibility == "hidden";

  }
}
   */



  // funcion para cambiar icono de barra

  let changeIcon = function(icon) {
    icon.classList.toggle("fa-times");
  }


  //funcion para mostrar el menú de navegación
  

  function mostrarOcultar() {
    var cont = document.getElementsByClassName("navbar")[0];
    
    let icon = document.querySelector(".fa-bars");
    

    if (cont.style.display == "initial") {
      cont.style.display = "none";
    } else {
      cont.style.display = "initial";
    }
  }


  //función para mostrar y ocultar menú de Talento

function ShowHide() {

  var container = document.getElementsByClassName("cont")[0];
  

  if (container.style.display  == "initial") {

    
    container.style.display  = "none";

  } else {

    container.style.display  = "initial";

  }
  
}
