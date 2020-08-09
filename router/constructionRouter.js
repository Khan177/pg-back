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

router
  .route('/:id')
  .get(async (req, res) => {
    const construction = await constructionModel.findById(req.params.id);
    if (!construction) {
      res.status(404).json({
        message: 'No construction found',
      });
    } else res.send(construction);
  })
  .delete(async (req, res) => {
    try {
      const construction = await constructionModel.findByIdAndDelete(req.params.id);
      if (!construction) res.status(404).send('No construction found');
      else
        res.status(200).send({
          message: 'Успешно удалено!',
        });
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .put(async (req, res) => {
    constructionModel.findByIdAndUpdate(
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
