const express = require('express');
const app = express();
const path = require('path')
app.use(express.static('public'));
app.listen(3000, () => console.log("el servidor esta corriendo en el puerto http://localhost:3000"))
    app.get  ("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
app.get  ("/loggin", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/loggin.html"))
})
app.get  ("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})