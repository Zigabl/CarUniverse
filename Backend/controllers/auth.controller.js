const authService = require("../services/auth.service");

async function register(req, res) {

  try {
    const { email, password } = req.body;
    const user = await authService.registerUser(email, password);

    res.json({
      success: true,
      user,
      message: "Registration successful"
    });

  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
}

async function login(req, res) {

  try {
    const { email, password } = req.body;
    const user = await authService.loginUser(email, password);

    req.session.userId = user._id; //req.session looks the same as req.body but body comes from frontend req and session is created by express-session and stored in MongoDB
    req.session.email = user.email; //services should not know about express (req, res)!!

    res.json({
      success: true,
      user,
      message: "Login successful"
    });

  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message
    });
  }
}

async function logout(req, res) {

  try {
    req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Logout failed"
    });
  }
}

async function getMe(req, res) {

  if (!req.session.userId) {
    return res.status(401).json({
      success: false,
      message: "Not authenticated"
    });
  }

  res.json({
    success: true,
    user: {
      id: req.session.userId,
      email: req.session.email
    }
  });
}

module.exports = {
  register,
  login,
  logout,
  getMe
};