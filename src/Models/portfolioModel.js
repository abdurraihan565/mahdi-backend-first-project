const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
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

const Portfolio = mongoose.model('profolios', portfolioSchema);

module.exports = Portfolio;