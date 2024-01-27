const express = require ("express");
const path = require("path");

const app = express();
const port = 3030;


app.use(express.static('public'))

app.use(express.static('desing'))


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get("/carrito", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/carrito.html'))
})

app.get("/producto", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/producto.html'))
})

app.listen(port, () => console.log(`http://localhost:${port}`))

