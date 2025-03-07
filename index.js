//Ejercicio 1.1
const producto = {
    nombre: 'Manzanas',
    precio: 20,
    disponible: true
}
const descuento = 10

const calcularConDescuento = (product, desc) => {
    console.log(
        `\nInformación del producto
Nombre del producto: ${product.nombre}| Precio: ${product.precio} | Estado:  ${(product.disponible ? 'Disponible' : 'No disponible')}`
    )

    const porcentage = (product.precio * desc) / 100
    const valorCalculado = product.precio - porcentage
    return console.log(
        `El precio con 10% de descuento es: ${valorCalculado}`
    )
}
//Enviamos el producto que vamos a mostrar y el descuento a usar
calcularConDescuento(producto, descuento)
console.log(`---------------`)

//Ejercicio 1.2
const carrito = [
    {
        nombre: 'Porción de Pizza',
        precio: 10,
        cantidad: 2
    },
    {
        nombre: 'Hamburguesa',
        precio: 20,
        cantidad: 2
    },
    {
        nombre: 'Tacos',
        precio: 10,
        cantidad: 2
    },
    {
        nombre: 'Sushi',
        precio: 30,
        cantidad: 1
    }
]

const costoCarrito = (lista) =>{
    let total = 0
    console.log('Precio total por producto')
    for(let producto of lista){
        let precioTotalProducto = producto.precio * producto.cantidad
        console.log(
            producto.nombre+': '+precioTotalProducto
        )
        total +=precioTotalProducto
    }
    console.log(`Precio total del carrito: ${total}`)
}
//le mandamos el carrito que queremos que calcule
costoCarrito(carrito)

console.log(`---------------`)
const inventario = [
    {
      id: 1,
      nombre: 'Laptop',
      precio: 800,
      stock: 10,
    },
    {
      id: 2,
      nombre: 'Móvil',
      precio: 300,
      stock: 15,
    },
    {
      id: 3,
      nombre: 'Auriculares',
      precio: 50,
      stock: 25,
    },
    {
      id: 4,
      nombre: 'Teclado',
      precio: 40,
      stock: 30,
    }
]
const listarInventario = (listaInventario) =>{
    for(let producto of listaInventario){
        console.log(`ID: ${producto.id} | Nombre: ${producto.nombre} | Precio: ${producto.precio} | Stock: ${producto.stock}`
        )
    }
}
const buscarPorId =(listaInventario, id)=>{
    const producto = listaInventario.find(product => product.id === id)
    if(!producto){
        return console.log('No existe nigun producto con ese ID')
    }
    return console.log(`\nProducto encontrado:
        ID: ${producto.id} | Nombre: ${producto.nombre} | Precio: ${producto.precio} | Stock: ${producto.stock}
`)
}

const realizarCompra = (listaInventario, id, cantidad) => {
    const producto = listaInventario.find(p => p.id === id)
    if (producto) {
        if (producto.stock >= cantidad) {
            producto.stock -= cantidad
            const costoTotal = producto.precio * cantidad
            console.log(`Compra exitosa! Costo total: Q${costoTotal}.`)
            console.log(`Stock restante del producto ${producto.nombre}: ${producto.stock}`)
        } else {
            console.log(`No hay suficiente stock. Solo hay ${producto.stock} unidades disponibles.`)
        }
    } else {
        console.log("Producto no encontrado.")
    }
}

const calcularValorInventario = (listaInventario) => {
    let valorTotal = 0
    listaInventario.forEach(producto => {
        valorTotal += producto.precio * producto.stock
    })
    console.log(`Valor total del inventario: Q${valorTotal}`)
}

listarInventario(inventario)
buscarPorId(inventario, 2)
realizarCompra(inventario, 1, 5) //id, cantidad
calcularValorInventario(inventario)
console.log('')
listarInventario(inventario)