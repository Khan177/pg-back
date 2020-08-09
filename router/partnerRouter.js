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

router
  .route('/:id')
  .get(async (req, res) => {
    const partner = await partnerModel.findById(req.params.id);
    if (!partner) {
      res.status(404).json({
        message: 'No partner found',
      });
    } else res.send(partner);
  })
  .delete(async (req, res) => {
    try {
      const partner = await partnerModel.findByIdAndDelete(req.params.id);
      if (!partner) res.status(404).send('No partner found');
      else
        res.status(200).send({
          message: 'Успешно удалено!',
        });
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .put(async (req, res) => {
    partnerModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error while updating a record : ' + JSON.stringify(err, undefined, 2));
      }
    );
  });

module.exports = router;
