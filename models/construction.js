const mongoose = require('mongoose');

const ConstructionSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  marketingAddress: {
    type: String,
    required: true,
  },
  legalAddress: {
    type: String,
  },
  dateOfCreation: {
    type: Date,
    required: true,
  },
  generalComment: {
    type: String,
    required: true,
  },
  familyConstruction: {
    type: String,
    required: true,
  },
  availabilityConstruction: {
    type: String,
    required: true,
  },
  subfamilyConstruction: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  availabilityLand: {
    type: Boolean,
    required: true,
  },
  sides: [{
    format: {
      type: String,
      required: true,
    },
    side: {
      type: String,
      required: true,
    },
    advertisingSide: {
      type: String,
      required: true,
    },
    purposeSide: {
      type: String,
      required: true,
    },
    sizes: {
      type: Number,
      required: true,
    },
    availabilitySide: {
      type: String,
      required: true,
    },
  }],
  crew: {
    type: String,
    required: true,
  },
  generalInventoryNumber: {
    type: String,
    required: true,
  },
  constructionPhoneNumber: {
    type: String,
    required: true,
  },
  techProblem: {
    type: String,
    required: true,
  },
  techComment: {
    type: String,
    required: true,
  },
  connectionStatus: {
    type: String,
    required: true,
  },
  markup: {
    type: String,
    required: true,
  },
  bookkeepInventoryNumber: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  coordinates: {
    type: String,
    required: true,
  },
  isLightUp: {
    type: Boolean,
  },
  code: {
    type: String,
  },
  responsible: {
    type: String,
  },
  manipulationType: {
    type: String,
  },
  informationBefore: {
    type: String,
  },
  informationAfter: {
    type: String,
  },
});

module.exports = mongoose.model('Construction', ConstructionSchema);
