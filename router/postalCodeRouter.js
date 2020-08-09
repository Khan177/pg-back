const express = require('express');
const router = express.Router();
const constructionModel = require('../models/construction');

router
  .route('/')
  .get(async (req, res) => {
    const postalCodes = await constructionModel.find({}).select('postalCode');
    try {
      res.send(postalCodes);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;