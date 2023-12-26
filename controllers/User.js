const User = require("../models/User");

exports.addUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.number;

    const data = await User.create({
      name: name,
      email: email,
      phonenumber: phonenumber,
    });
    res.status(201).json({ newUserDetails: data });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ allUsers: users });
  } catch (error) {
    res.status(500).json({
      erorr: error,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  await User.destroy({ where: { id: userId } });
  res.status(200);
};
