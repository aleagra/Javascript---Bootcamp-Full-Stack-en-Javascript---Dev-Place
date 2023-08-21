const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const puertoMongo = process.env.LOCALHOST;
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/product.route");
const detailRouter = require("./routes/detalles.route");
const mongose = require("mongoose");
var cors = require("cors");
app.use(cors());
const urlConexionMongo = process.env.LOCALHOST;

mongose
  .connect(urlConexionMongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
mongose.set("strictPopulate", false);
app.use(express.urlencoded({ extended: true }));
app.use(detailRouter);
app.use(userRouter);
app.use(productRouter);
app.use(express.static(__dirname));
app.listen(port, () => {
  console.log("Servidor corriendo por el puerto " + port);
});
