const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
  partnerName: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  partnerType: {
    type: String,
    required: true,
  },
  clientType: {
    type: String,
    required: true,
  },
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
  legalAddress: {
    type: String,
    required: true,
  },
  physicalAddress: {
    type: String,
    required: true,
  },
  destinationBank: {
    type: String,
    required: true,
  },
  iik: {
    type: String,
    required: true,
  },
  bik: {
    type: String,
    required: true,
  },
  kbe: {
    type: String,
    required: true,
  },
  phoneContact: [{
    fullname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  }],
  agencyComissionType: {
    type: String,
    required: true,
  },
  agencyComission: {
    type: String,
    required: true,
  },
  agencyDistributed: {
    type: String,
    required: true,
  },
  agencyServices: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Partner', PartnerSchema);
