const express = require("express");

const router = express.Router();

const uploadMiddleware = require("./middlewares/upload");

const userControllers = require("./controllers/userControllers");

const announceControllers = require("./controllers/announceControllers");
const newsletterControllers = require("./controllers/newsletterControllers");
const carbrandControllers = require("./controllers/carbrandControllers");
const carmodelControllers = require("./controllers/carmodelControllers");
const cartypeControllers = require("./controllers/cartypeControllers");

const auth = require("./middlewares/auth");

router.get("/carmodel", carmodelControllers.browse);
router.get("/carmodellistbybrand/:id", carmodelControllers.listModelByBrand);
router.get("/carbrand", carbrandControllers.browse);
router.get("/carmodelbybrand", carbrandControllers.modelsFromBrand);
router.get("/cartype", cartypeControllers.types);

router.get("/user", userControllers.browse);
// router.post("/user", userControllers.add);

router.delete("/user/:id", userControllers.destroy);
router.put("/user/:id", auth.hashPassword, userControllers.edit);
router.get("/user/:id", userControllers.read);

router.post("/user", auth.validateUser, auth.hashPassword, userControllers.add);
router.post("/login", auth.checkEmailIfExist, userControllers.verifyPassword);

router.post(
  "/test",
  uploadMiddleware.uploadFile,
  announceControllers.checkUpload
);

router.get("/announce", announceControllers.select);
// router.delete("/announce/:id", announceControllers.destroy);
// router.put("/announce/:id", auth.hashPassword, announceControllers.edit);
// router.get("/announce/:id", announceControllers.read);
// router.post("/announce", announceControllers.add);

router.post("/newsletter", newsletterControllers.add);
router.get("/newsletter/:id", newsletterControllers.read);

// router.get("/announce/:model", announceControllers.searchByModel);

module.exports = router;
