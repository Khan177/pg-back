const express = require('express');
const router = express.Router();
const constructionModel = require('../models/construction');

router
  .route('/')
  .get(async (req, res) => {
    const cities = await constructionModel.find({}).select('city');
    try {
      res.send(cities);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;