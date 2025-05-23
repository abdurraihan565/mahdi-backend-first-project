const mongoose = require('mongoose');
/*
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
  
  
});*/
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: [
    {
      type: {
        type: String,
        enum: ['image', 'text'],
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Blog= mongoose.model('blogs', BlogSchema);

module.exports = Blog;