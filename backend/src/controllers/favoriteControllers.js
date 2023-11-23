const models = require("../models");

const add = (req, res) => {
  const favorite = req.body;
  console.info("favorite: ", favorite);
  // TODO validations (length, format...)

  models.favorite
    .insert(favorite)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({ message: "Annonce ajouté aux favoris" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err.errno,
      });
    });
};

const readFavorite = (req, res) => {
  models.favorite
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

module.exports = {
  readFavorite,
  add,
};
