const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  legalAddress: {
    type: String,
    required: true,
  },
  cadastralNumber: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Location', LocationSchema);
