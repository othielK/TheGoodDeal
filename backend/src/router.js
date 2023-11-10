const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

const announceControllers = require("./controllers/announceControllers");
const newsletterControllers = require("./controllers/newsletterControllers");

const auth = require("./middlewares/auth");

router.get("/user", userControllers.browse);
// router.post("/user", userControllers.add);

router.delete("/user/:id", userControllers.destroy);
router.put("/user/:id", auth.hashPassword, userControllers.edit);
router.get("/user/:id", userControllers.read);

router.post("/user", auth.validateUser, auth.hashPassword, userControllers.add);
router.post("/login", auth.checkEmailIfExist, userControllers.verifyPassword);

router.get("/announce", announceControllers.select);
// router.delete("/announce/:id", announceControllers.destroy);
// router.put("/announce/:id", auth.hashPassword, announceControllers.edit);
// router.get("/announce/:id", announceControllers.read);
// router.post("/announce", announceControllers.add);

router.post("/newsletter", newsletterControllers.add);
router.get("/newsletter/:id", newsletterControllers.read);

router.get("/announce/:model", announceControllers.searchByModel);

module.exports = router;
