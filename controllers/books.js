const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Books
      .find({})
      .sort({favorite: 1})
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(502).json(err))
  },

  create: function (req, res) {
    console.log(req.body)
    db.Books
      .create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(507).json(err))
  },

  update: (req, res) => {
    db.Books
      .updateOne(req.params.id)
      .then(updated => res.json(updated))
      .catch(err => res.status(502).json(err))
  },

  delete: function (req, res) {
    db.Books
      .findByIdAndDelete(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(502).json(err))
  }
};