const {
  registerUserService,
  loginUserService,
} = require("../services/auth.service");

// REGISTER
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await registerUserService(name, email, password);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// LOGIN
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const data = await loginUserService(email, password);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser, loginUser };
