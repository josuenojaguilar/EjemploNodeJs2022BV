const Productos = require('../models/productos.model');

// OBTENER PRODUCTOS
function ObtenerProductos (req, res) {
    Productos.find({}, (err, productosEncontrados) => {

        return res.send({ productos: productosEncontrados })
    })
}

// AGREGAR PRODUCTOS
function AgregarProductos (req, res) {

}

module.exports = {
    ObtenerProductos,
    AgregarProductos
}