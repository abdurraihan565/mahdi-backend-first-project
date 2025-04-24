const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  url: {
    type: String, 
    required: true
  },
  
  
});

const Blog= mongoose.model('blogs', BlogSchema);

module.exports = Blog;