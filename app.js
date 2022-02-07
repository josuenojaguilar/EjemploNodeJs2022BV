const express = require('express');
const app = express();

// IMPORTACION RUTAS
const productosRoutes = require('./src/routes/productos.routes');
const ejemplosRoutes = require('./src/routes/ejemplos.routes');


// CARGA DE RUTAS localhost:3000/api/productos
app.use('/api', productosRoutes, ejemplosRoutes);

module.exports = app;