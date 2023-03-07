var verde = document.getElementById("verde");
var cajas = document.querySelector(".cajas");
var boton = document.querySelector("#verde");
var cajaAEliminar = document.querySelector(".caja");

let articulo = document.getElementById("articulo");
let precio = document.getElementById("precio");
let listaArticulos = document.getElementById("listaArticulos");
let totalMSG = document.getElementById("total"); 
let total = 0;

function agregarProducto()
{
    let articuloTexto = articulo.value;
    let precioTexto = precio.value;

     // Agregar productos al ticket
     let elementoLista = document.createElement("li");
     elementoLista.innerHTML=articuloTexto + "  $" + precioTexto;

     listaArticulos.appendChild(elementoLista);
     
     // Eliminar el texto
     articulo.value="";
     precio.value="";

     // Calcula el total de los productos
     var numerico = parseInt(precioTexto); 
     total = total + numerico
     console.log(total);

     // Imprime el total
     totalMSG.innerHTML= "Total: $" + total;

     cajaAEliminar.style.removeProperty("display");
    }

// Oculta la caja
function cerrarCaja()
{
    cajaAEliminar.style.display = "none"; 
}



