const { Detail } = require("../models/detalles.model");

const getDetail = async (req, res) => {
  const detail = await Detail.find().populate("user");

  res.json(detail);
};

const findByDetail = async (req, res) => {
  const { id } = req.params;
  Detail.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ message: "Id nos encontrado" });
    });
};

const UpdateByDetail = async (req, res) => {
  const { id } = req.params;
  await Product.updateOne({ _id: id }, req.body);
  res.json({ message: "Detalles Modificados" });
};

const createDetail = async (req, res) => {
  const modelData = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    direccion: req.body.direccion,
    email: req.body.email,
    tipo_pago: req.body.tipo_pago,
    numero_tarjeta: req.body.numero_tarjeta,
    nombre_tarjeta: req.body.nombre_tarjeta,
    codigo: req.body.codigo,
    expiracion: req.body.expiracion,
    user: req.body.user,
  };

  const detail = new Detail(modelData);
  detail.save();
  res.json(detail);
};
module.exports = {
  getDetail,
  createDetail,
  findByDetail,
  UpdateByDetail,
};
