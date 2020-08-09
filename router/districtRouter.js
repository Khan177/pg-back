const express = require('express');
const router = express.Router();
const constructionModel = require('../models/construction');

router.route('/').get(async (req, res) => {
  const districts = await constructionModel.find({}).distinct('district');
  try {
    res.send(districts);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
