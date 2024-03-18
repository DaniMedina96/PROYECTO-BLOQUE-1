
function agregarAlCarrito(bicis, precio) {
    var carrito = document.getElementById('carrito-lista');
    var totalBicis = document.getElementById('total');
    var total = parseInt(totalBicis.textContent);

    var productosEnCarrito = carrito.getElementsByTagName('p');
    for (var i = 0; i < productosEnCarrito.length; i++) {
        var producto = productosEnCarrito[i];
        if (producto.textContent.includes(bicis)) {
            var cantidadActual = parseInt(producto.dataset.cantidad);
            cantidadActual++;
            producto.textContent = bicis + ' - ' + precio + '€ (x' + cantidadActual + ')';
            producto.dataset.cantidad = cantidadActual;

            total += precio;
            totalBicis.textContent = total;
            return; 
        }
    }

    var nuevaBici = document.createElement('p');
    nuevaBici.textContent = bicis + ' - ' + precio + '€ (x1)';
    nuevaBici.dataset.cantidad = 1; 
    carrito.appendChild(nuevaBici);

    total += precio;
    totalBicis.textContent = total;
}


function vaciarCarrito() {
    var carrito = document.getElementById('carrito-lista');
    var totalBicis = document.getElementById('total');


    carrito.innerHTML = '';
    totalBicis.textContent = '0';
}


var botonVaciar = document.getElementById('vaciar-carrito');
botonVaciar.onclick = vaciarCarrito;