const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

// CONFIG

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))


// MIDDLEWARE
app.use(express.static('public'));
app.use(express.static('design'));



// ROUTES
const otherRoutes = require('./routes/other.routes');
const authRoutes = require('./routes/authentication.routes');
const cartRoutes = require('./routes/cart.routes');
const prodRoutes = require('./routes/product.routes');

// ROUTERS
app.use('/', otherRoutes);
app.use('/aut', authRoutes);
app.use('/producto', prodRoutes);
app.use('/carrito', cartRoutes);
app.use ("/edit-Product",otherRoutes);


app.listen(port, () => console.log(`http://localhost:${port}`))

