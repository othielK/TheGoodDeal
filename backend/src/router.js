const express = require("express");

const router = express.Router();

const uploadMiddleware = require("./middlewares/upload");

const userControllers = require("./controllers/userControllers");

const announceControllers = require("./controllers/announceControllers");
const newsletterControllers = require("./controllers/newsletterControllers");
const carbrandControllers = require("./controllers/carbrandControllers");
const carmodelControllers = require("./controllers/carmodelControllers");
const messageControllers = require("./controllers/messageControllers");

const auth = require("./middlewares/auth");

router.get("/carmodel", carmodelControllers.browse);
router.get("/carbrand", carbrandControllers.browse);
router.get("/carmodelbybrand", carbrandControllers.modelsFromBrand);

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

router.get("/announce/model/:model", announceControllers.searchByModel);
router.get("/announce/brand/:brand", announceControllers.searchByBrand);
router.get("/announce/search/:searchTerm", announceControllers.search);
router.get("/announce/:id", announceControllers.getCarDetails);

router.post("/sendmessage", messageControllers.sendMessageBetweenUsers);
router.get(
  "/messages/:userId",
  auth.checkIfIsAllowed,
  messageControllers.listUserMessage
);

router.get(
  "/messages/sender/:userId/receiver/:receiverId",
  messageControllers.listMessagesBetweenUsers
);
module.exports = router;
