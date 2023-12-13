const express = require("express");

const router = express.Router();

const uploadMiddleware = require("./middlewares/upload");

const userControllers = require("./controllers/userControllers");

const announceControllers = require("./controllers/announceControllers");
const newsletterControllers = require("./controllers/newsletterControllers");
const carbrandControllers = require("./controllers/carbrandControllers");
const carmodelControllers = require("./controllers/carmodelControllers");
const cartypeControllers = require("./controllers/cartypeControllers");
const imageControllers = require("./controllers/imageControllers");
const messageControllers = require("./controllers/messageControllers");

const auth = require("./middlewares/auth");
const authannounce = require("./middlewares/authannounce");

router.get("/carmodel", carmodelControllers.browse);
router.get("/carmodellistbybrand/:id", carmodelControllers.listModelByBrand);
router.get("/carbrand", carbrandControllers.browse);
router.get("/carmodelbybrand", carbrandControllers.modelsFromBrand);
router.get("/cartype", cartypeControllers.types);

router.get("/user", userControllers.browse);
// router.post("/user", userControllers.add);

router.delete("/user/:id", userControllers.destroy);
router.put("/user/:id", userControllers.edit);
router.get("/user/:id", userControllers.read);
router.get("/avatar/:id", userControllers.avatar);

router.post("/user", auth.validateUser, auth.hashPassword, userControllers.add);
router.post("/login", auth.checkEmailIfExist, userControllers.verifyPassword);

router.post(
  "/test",
  uploadMiddleware.uploadFile,
  announceControllers.checkUpload
);

router.get("/announce", announceControllers.select);
router.get("/listAnnounces", announceControllers.browse);
router.post(
  "/announce",
  uploadMiddleware.uploadFile,
  authannounce.validateAnnounce,
  announceControllers.add
);
router.get(
  "/myAnnouncebyuser/:userId",
  announceControllers.readMyAnnouncebyUser
);
router.get(
  "/myAnnounceidbyuserid/:userId/:announceId",
  announceControllers.readMyAnnounceIdbyUserId
);
router.put(
  "/myAnnouncebyuser/:userId/:announceId",
  announceControllers.editAnnounce
);
router.delete(
  "/myAnnounce/:userId/:announceId",
  announceControllers.destroyAnnonce
);
// router.put("/announce/:id", auth.hashPassword, announceControllers.edit);

router.get("/image", imageControllers.read);

router.post("/newsletter", newsletterControllers.add);
router.get("/newsletter/:id", newsletterControllers.read);

router.get("/announce/model/:model", announceControllers.searchByModel);
router.get("/announce/brand/:brand", announceControllers.searchByBrand);
router.get("/announce/type/:type", announceControllers.searchByType);
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
