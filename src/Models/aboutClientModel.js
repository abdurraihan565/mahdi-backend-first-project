const mongoose = require('mongoose');

const aboutClientSchema = new mongoose.Schema({
 
  url: {
    type: [String], // array of image URLs
    required: true
  },
 
});

const Clients = mongoose.model('aboutclients',aboutClientSchema);

module.exports = Clients;