const Productos = require('../models/productos.model');

// OBTENER PRODUCTOS
function ObtenerProductos (req, res) {
    Productos.find({}, (err, productosEncontrados) => {

        return res.send({ productos: productosEncontrados })
    })
}

// AGREGAR PRODUCTOS
function AgregarProductos (req, res) {
    var parametros = req.body;
    var modeloProductos = new Productos();
    
    if( parametros.nombre && parametros.proveedor ){
        modeloProductos.nombre = parametros.nombre;
        modeloProductos.proveedor = parametros.proveedor;
        modeloProductos.sabores = [];

        modeloProductos.save((err, productoGuardado)=>{

            return res.send({ productos: productoGuardado});
        });
    } else {
        return res.send({ mensaje: "Debe enviar los parametros obligatorios."})
    }


}

module.exports = {
    ObtenerProductos,
    AgregarProductos
}