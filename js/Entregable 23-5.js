function Carrito(producto, precio) {
this.producto = producto;
this.precio = precio;
}
let inicioProducto;
const productos = [];
do {
inicioProducto = prompt("Ingresa nombre del producto o salir");
if (
    inicioProducto === "SALIR" ||
    inicioProducto === "salir" ||
    inicioProducto === "Salir"
) {
    break;
} else {
    nombreProducto = inicioProducto;
    const precio = prompt("Ingresa precio del producto");
    productos.push(new Carrito(nombreProducto, precio));
}
} while (
inicioProducto != "SALIR" ||
inicioProducto != "salir" ||
inicioProducto != "Salir"
);

console.log(productos);
resultado = productos.find((pro) => pro.producto === "crema");
console.log(resultado);
