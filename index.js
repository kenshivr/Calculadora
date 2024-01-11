// Importar la libreria
// Librerias
const express = require("express");

// Objetos
// Objetos para llamar los metodos de express
const app = express();

// // Ruta inicial
// app.get("/", function(req, res) {
//     res.send("Hola estudiantes");
// });

// Ruta de archivos estaticos
// Middleware
app.use(express.static("public"));
// Si no sabemos donde esta public podemos usar la siguiente linea: app.use('/static', express.static(__dirname + '/public'));


// Configurar el puerto usado para el servidor local
// Puerto o servidor
pp.listen(3000, function() {
    console.log("El servidor es http://localhost:3000");
});