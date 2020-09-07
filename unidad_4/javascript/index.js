/*
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Bienvenidos 😎");
});

app.listen(port, () => console.log(`Servidor escuchando ${port}!`));
*/

const funciones = require('./funciones')

console.log(funciones.sucesor(1));