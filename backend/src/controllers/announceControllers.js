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

const read = (req, res) => {
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

const edit = (req, res) => {
  // const id = req.params;
  const announce = req.body;

  // TODO validations (length, format...)

  announce.id = parseInt(req.params.id, 10);

  models.announce
    .update(announce)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// sala announce

const add = (req, res) => {
  const announce = req.body;
  // const picture = req.file.filename;
  const picture = req.file.filename;
  console.info("coucou", picture);
  models.announce.insert(announce).then(([result]) => {
    console.info(result);
    const announceId = result.insertId;
    models.announce
      .insertImage(picture, announceId)
      .then(([result2]) => {
        console.info(result2);
        res.status(200).send("Créée avec succés");
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });
};
// upload image

const checkUpload = (req, res) => {
  res.status(200).send("fichier téléchargé");
};

// const addAnnounceWithImages = (req, res) => {
//   const { announce, images } = req.body;

//   models.announce
//     .insert(announce)
//     .then((announceId) => {
//       console.info(`Announce créée avec succés: ${announceId}`);
//       res.status(200).json({ message: "Announce créée avec succès" });
//       return models.announce.insertImage(images, announceId);
//     })
//     .then(() => {
//       console.info("Images insérées avec succés");
//       res.status(200).json({ message: "Annonce et images créés avec succès" });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({
//         error: err.errno,
//       });
//     });
// };

const selectNewAnnounce = (req, res) => {
  const { model } = req.params;
  models.announce.selectAllForAnnounce(model).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
};

const destroy = (req, res) => {
  const { id } = req.params;
  models.announce
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// SELECTALL
const select = (req, res) => {
  const { model } = req.params;
  models.announce.selectAll(model).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
};

// SEARCH
const searchByModel = (req, res) => {
  const { model } = req.params;
  models.announce.findByModel(model).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  checkUpload,
  searchByModel,
  select,
  selectNewAnnounce,
  // addAnnounceWithImages,
};
