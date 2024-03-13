/*function agregarAlCarrito(bicis, precio) {
    var carrito = document.getElementById('carrito-lista');
    var totalBicis = document.getElementById('total');
    var total = parseInt(totalBicis.textContent)

    var nuevaBici = document.createElement('p');
    nuevaBici.textContent = bicis + ' - ' + precio + '€';

    carrito.appendChild(nuevaBici);

    total += precio;
    totalBicis.textContent = total;
}*/

function agregarAlCarrito(bicis, precio) {
    var carrito = document.getElementById('carrito-lista');
    var totalBicis = document.getElementById('total');
    var total = parseInt(totalBicis.textContent);

    // Buscar si el producto ya está en el carrito
    var productosEnCarrito = carrito.getElementsByTagName('p');
    for (var i = 0; i < productosEnCarrito.length; i++) {
        var producto = productosEnCarrito[i];
        if (producto.textContent.includes(bicis)) {
            // Si el producto ya está en el carrito, incrementar la cantidad y actualizar el total
            var cantidadActual = parseInt(producto.dataset.cantidad);
            cantidadActual++;
            producto.textContent = bicis + ' - ' + precio + '€ (x' + cantidadActual + ')';
            producto.dataset.cantidad = cantidadActual;

            total += precio;
            totalBicis.textContent = total;
            return; // Salir de la función si el producto ya está en el carrito
        }
    }

    // Si el producto no está en el carrito, agregarlo como un nuevo elemento
    var nuevaBici = document.createElement('p');
    nuevaBici.textContent = bicis + ' - ' + precio + '€ (x1)';
    nuevaBici.dataset.cantidad = 1; // Guardar la cantidad como un atributo de datos
    carrito.appendChild(nuevaBici);

    total += precio;
    totalBicis.textContent = total;
}