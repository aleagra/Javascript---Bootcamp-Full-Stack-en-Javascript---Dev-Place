const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const products = require("./public/alldatos.json");

app.listen(port, () => {
  console.log(`puerto ${port} activo`);
});

app.use(router);

router.get("/alldatos", (req, res) => {
  res.json(products);
});

router.get("/alldatos/:id", (req, res) => {
  const id = req.params.id;
  const selectedItem = products.find((ele) => ele.id == id);
  res.json(selectedItem);
});
