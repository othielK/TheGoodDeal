const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

router.get("/user", userControllers.browse);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);
router.put("/user/:id", userControllers.edit);
router.get("/user/:id", userControllers.read);

module.exports = router;
