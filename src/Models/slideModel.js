const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: [String], // array of image URLs
    required: true
  },
  categories: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: "VIEW GALLERY"
  }
});

const Images = mongoose.model('images', slideSchema);

module.exports = Images;
