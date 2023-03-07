function cerrarCaja(caja){
    var cajaPorCerrar = document.querySelector("#" + caja);
    cajaPorCerrar.remove();
    mostrarAlerta();
}


function mostrarAlerta()
{

var mensaje = document.createElement("p");
mensaje.innerHTML = "La notificación se eliminó correctamente";
mensaje.classList.add("negritas")

var contenidoDiv = document.getElementById("contenido");
contenidoDiv.appendChild(mensaje);
}