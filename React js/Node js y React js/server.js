const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const puertoMongo = process.env.LOCALHOST;
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/product.route");
const mongose = require("mongoose");
var cors = require("cors");
app.use(cors());
mongose
  .connect(puertoMongo)
  .then(() => console.log("Conect MongoDB"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(productRouter);
app.use(express.static(__dirname));
app.listen(port, () => {
  console.log("Servidor corriendo por el puerto " + port);
});
