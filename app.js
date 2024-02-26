const express = require ("express");
const path = require("path");

const app = express();
const port = 3030;

 const editRoute = require ("./routes/edit.routes")

// middleware
app.use(express.static('public'))

app.use(express.static('desing'))
// configs
app.set("view engine", "ejs");
// app.set("views",path.join(__dirname, "./views"));

//rutas
app.use ("/",editRoute)
app.use("/product/edit" , editRoute) //va a la ruta como /product/edit 

/*app.get("/", (req, res) => {
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
app.get("/edit", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/edit-product.html'))
})*/

app.listen(port, () => console.log(`http://localhost:${port}`))

