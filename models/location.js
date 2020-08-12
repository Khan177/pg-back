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
  contractNumber: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  akimat: {
    type: String,
    required: true,
  },
  act: {
    type: String,
    required: true,
  },
  clearanceStatus: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Location', LocationSchema);
