const express = require('express');
const router = express.Router();
const installationModel = require('../models/installation');

router
  .route('/')
  .get(async (req, res) => {
    const installation = await installationModel.find({});
    try {
      res.send(installation);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  })
  .post(async (req, res) => {
    try {
      const installation = new installationModel(req.body);
      await installation.save();
      res.send(installation);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const installation = await installationModel.findById(req.params.id);
    if (!installation) {
      res.status(404).json({
        message: 'No installation found',
      });
    } else res.send(installation);
  })
  .delete(async (req, res) => {
    try {
      const installation = await installationModel.findByIdAndDelete(req.params.id);
      if (!installation) res.status(404).send('No installation found');
      else
        res.status(200).send({
          message: 'Успешно удалено!',
        });
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .put(async (req, res) => {
    installationModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else
          res.status(500).json({
            message: 'Error while updating a record : ' + JSON.stringify(err, undefined, 2),
          });
      }
    );
  });

module.exports = router;
