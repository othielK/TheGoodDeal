const models = require("../models");

const browse = (req, res) => {
  models.carbrand
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const modelsFromBrand = (req, res) => {
  models.carbrand
    .findModelsFromBrand()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  modelsFromBrand,
};
