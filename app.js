const express = require ("express");
const path = require("path");

const app = express();
const port = 3030;


app.use(express.static('public'))

app.use(express.static('design'))


app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/productCart.html'))
})

app.get("/product", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/productDetail.html'))
})

app.listen(port, () => console.log(`http://localhost:${port}`))

