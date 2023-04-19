let articulo = document.getElementById("articulo");
let precio = document.getElementById("precio");
let listaArticulos = document.getElementById("listaArticulos");
let totalTexto = document.getElementById("total");
let total = 0;

function agregarAticket()
{
    let articuloTexto = articulo.value;
    let precioTexto = precio.value;

    console.log(articuloTexto);
    console.log(precioTexto);

    let elementoLista = document.createElement("li");
    elementoLista.innerHTML = articuloTexto + " $" + precioTexto;
    
    listaArticulos.appendChild(elementoLista);

    articulo.value = "";
    precio.value = "";

    total = total + parseFloat(precioTexto);
    console.log(total);

    totalTexto.innerHTML='Total: $' + total;
    muestraAlerta();
}

async function muestraAlerta() 
{
    const alert = document.createElement('ion-alert');
    alert.subHeader = 'El artículo se ha agregado exitosamente.';
    alert.message = '¡Gracias!';
    alert.buttons = ['Cerrar'];
    document.body.appendChild(alert);
    await alert.present();
}
