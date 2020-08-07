const express = require('express');
const router = express.Router();
const constructionModel = require('../models/construction');

router
  .route('/')
  .get(async (req, res) => {
    const construction = await constructionModel.find({});
    try {
      res.send(construction);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .post(async (req, res) => {
    try {
      const construction = new constructionModel(req.body);
      await construction.save();
      res.send(construction);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;
