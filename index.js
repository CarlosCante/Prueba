const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Solicitud GET correcta');
});


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});