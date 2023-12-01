const models = require("../models");

const browse = (req, res) => {
  models.announce
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readMyAnnounce = (req, res) => {
  models.announce
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readMyAnnouncebyUser = (req, res) => {
  const { userId } = req.params;
  models.announce.findAllAnnouncesByUser(userId).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
};

const deleteMyAnnounce = (req, res) => {
  const { userId, announceId } = req.params;
  models.announce
    .deleteAnnounce(userId, announceId)
    .then(() => {
      res.status(200).json({ message: "Annonce supprimée de mes announces" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err.errno,
      });
    });
};

const myAnnounceCheck = (req, res) => {
  const { userId, announceId } = req.params;
  models.announce.myAnnounceCheck(userId, announceId).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
};

module.exports = {
  browse,
  readMyAnnounce,
  readMyAnnouncebyUser,
  deleteMyAnnounce,
  myAnnounceCheck,
};
