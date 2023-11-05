const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

const auth = require("./middlewares/auth");

router.get("/user", userControllers.browse);
router.delete("/user/:id", userControllers.destroy);
router.put("/user/:id", auth.hashPassword, userControllers.edit);
router.get("/user/:id", userControllers.read);

router.post("/user", auth.validateUser, auth.hashPassword, userControllers.add);
router.post("/login", auth.checkEmailIfExist, userControllers.verifyPassword);

module.exports = router;
