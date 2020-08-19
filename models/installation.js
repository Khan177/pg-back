const mongoose = require('mongoose');

const InstallationSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  advertisingSide: {
    type: String,
    required: true,
  },
  design: {
    type: String,
    required: true,
  },
  previousDesign: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  installationDate: {
    type: Date,
    required: true,
  },
  deinstallationDate: {
    type: Date,
    required: true,
  },
  formatSizes: {
    type: String,
    required: true,
  },
  photoRep: {
    type: String,
    required: true,
  },
  addPhotoRep: {
    type: String,
    required: true,
  },
  submPhotoRep: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  PTC_NONPTC: {
    type: String,
    required: true,
  },
  light: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Installation', InstallationSchema);
