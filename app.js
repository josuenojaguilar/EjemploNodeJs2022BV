const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hola Mundo, estoy usando Express!!!');
});

// Parametros Obligatorios
app.get('/kinal/:idKinal', function (req, res) {
    var id = req.params.idKinal;
    res.send('Esta es una ruta para Kinalito y este es el valor del parametro en ruta:' + id);
});

// Parametros Opcionales
app.get('/opcional/:idOpcional?', function (req, res) {
    var idOp = req.params.idOpcional;
// idOp !== undefined
    if(idOp){
        res.send('Este es el valor del parametro en ruta OPCIONAL:' + idOp);
    } else {
        res.send('No hay ningun valor en la ruta.')
    }
});



app.listen(3000, function (){
    console.log("Servidor de Express corriendo correctamente en el puerto 3000");
});