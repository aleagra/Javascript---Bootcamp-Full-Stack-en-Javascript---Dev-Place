const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/product.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(productRouter);
app.listen(port, () => {
  console.log("Servidor corriendo por el puerto " + port);
});
