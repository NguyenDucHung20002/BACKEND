const User = require('../models/User');

exports.login = (req, res) => {
  const { email, password } = req.body;

  console.log(name, email, password);

  res.status(200).json({
    success: true,
  });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
};
