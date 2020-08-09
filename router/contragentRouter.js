const express = require('express');
const router = express.Router();
const partnerModel = require('../models/partner');

router.route('/').get(async (req, res) => {
  const contragents = await partnerModel.find({}).distinct('partnerName');
  try {
    res.send(contragents);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
