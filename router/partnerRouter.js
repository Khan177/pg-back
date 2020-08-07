const express = require('express');
const router = express.Router();
const partnerModel = require('../models/partner');

router
  .route('/')
  .get(async (req, res) => {
    const partner = await partnerModel.find({});
    try {
      res.send(partner);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .post(async (req, res) => {
    try {
      const partner = new partnerModel(req.body);
      await partner.save();
      res.send(partner);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;
