const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  const user = await User.find();
  res.json(user);
};
const findByUser = async (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ message: "Id nos encontrado" });
    });
};

const UpdateByUser = async (req, res) => {
  const { id } = req.params;
  await User.updateOne({ _id: id }, req.body);
  res.json({ message: "Usuario Modificado" });
};

const deleteByUser = async (req, res) => {
  const { id } = req.params;
  await User.remove({ _id: id });
  res.json({ message: "Usuario Eliminado" });
};

const createUser = async (req, res) => {
  const modelData = {
    nombre: req.body.nombre,
    mail: req.body.mail,
    password: bcrypt.hashSync(req.body.password, 10),
  };
  const user = new User(modelData);
  user.save();
  res.json(user);
};

module.exports = {
  getUsers,
  createUser,
  findByUser,
  UpdateByUser,
  deleteByUser,
};
