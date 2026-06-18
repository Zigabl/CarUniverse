const express = require("express");
const router = express.Router();

const controller = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/me", authMiddleware, controller.getMe);

router.post("/logout", authMiddleware, controller.logout); //even though we dont post anything for logout it still changes the state of session,... so its still post request
router.post("/register", controller.register);
router.post("/login", controller.login);

module.exports = router;