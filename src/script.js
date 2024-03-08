function agregarAlCarrito(bicis, precio) {
    var carrito = document.getElementById('carrito-lista');
    var totalBicis = document.getElementById('total');
    var total = parseInt(totalBicis.textContent)

    var nuevaBici = document.createElement('p');
    nuevaBici.textContent = bicis + ' - ' + precio + '€';

    carrito.appendChild(nuevaBici);

    total += precio;
    totalBicis.textContent = total;
}