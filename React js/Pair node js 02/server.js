const express = require("express");
const app = express();
const port = 5000;
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/product.route");
const mongose = require("mongoose");
mongose
  .connect("mongodb://127.0.0.1:27017/tienda")
  .then(() => console.log("Conect MongoDB"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo por el puerto ${port}`);
});
