const express = require("express");
const app = express();
const categoryRoutes = require("./routes/category");
const cartRoutes =require("./routes/cart");
const porductRoutes = require("./routes/porduct")


app.use(express.json());
app.use("/category" , categoryRoutes)
app.use("/cart", cartRoutes);
app.use("/product",porductRoutes )


module.exports = app;