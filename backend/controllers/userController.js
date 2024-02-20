const User = require("../models/userModel");

/// register the user

exports.registerUser = async (req, res, next) => {
  const user = await User.create(req.body);

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    message: "User Registered Successfully",
    user,
    token,
  });
};

///USER lOGIN

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      message: "Please enter email and password",
    });
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }
  const token = await user.getJWTToken();

  res.cookie("token", token, { httpOnly: true }).status(200).json({
    success: true,
    message: "Login successful",
    token,
  });
};

///logout user

exports.logout = (req, res, next) => {// Debugging statement
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });// Debugging statement
    res.status(200).json({ success: true, message: "Logout successful" });
  };
  
exports.demo = async (req, res) => {
  const user = await User.find();

  res.status(200).json({
    message: "success",
    user,
  });
};
