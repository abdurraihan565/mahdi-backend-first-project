const mongoose = require('mongoose');

const ContibutionSchema = new mongoose.Schema({
 
  url: {
    type: [String], // array of image URLs
    required: true
  },
 
});

const Contibutions = mongoose.model('aboutContibutions',ContibutionSchema);

module.exports = Contibutions;