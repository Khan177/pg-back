const express = require('express');
const router = express.Router();
const locationModel = require('../models/location');

router
  .route('/')
  .get(async (req, res) => {
    const location = await locationModel.find({});
    try {
      res.send(location);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .post(async (req, res) => {
    try {
      const location = new locationModel(req.body);
      await location.save();
      res.send(location);
    } catch (err) {
      res.status(500).send(err);
    }
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const location = await locationModel.findById(req.params.id);
    if (!location) {
      res.status(404).json({
        message: 'No location found',
      });
    } else res.send(location);
  })
  .delete(async (req, res) => {
    try {
      const location = await locationModel.findByIdAndDelete(req.params.id);
      if (!location) res.status(404).send('No location found');
      else
        res.status(200).send({
          message: 'Успешно удалено!',
        });
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .put(async (req, res) => {
    locationModel.findByIdAndUpdate(
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