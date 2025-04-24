const mongoose = require('mongoose');

const aboutTeamSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  url: {
    type: String, // array of image URLs
    required: true
  },
  
  
});

const AboutsTeam= mongoose.model('abouts', aboutTeamSchema);

module.exports = AboutsTeam;