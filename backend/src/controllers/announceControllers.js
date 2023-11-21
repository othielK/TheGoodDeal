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

const add = (req, res) => {
  const announce = req.body;
  // const picture = req.file.filename;
  console.info("announce :: ", announce);
  // TODO validations (length, format...)

  models.announce
    .insert(announce)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({ message: "Announce créée avec succès" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err.errno,
      });
    });
};

const checkUpload = (req, res) => {
  res.status(200).send("fichier téléchargé");
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
};
