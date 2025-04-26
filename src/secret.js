require('dotenv').config();
const serverPort = process.env.SERVER_PORT || 3003;
const MongodbURL = process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/mahdi';
const clintURL = process.env.CLINT_URL || '';
const CloudinaryName = process.env.CLOUDINARY_CLOUD_NAME || 'dnp4ggqrz';
const CloudinaryApiKey = process.env.CLOUDINARY_API_KEY || '333587322729368';
const CloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET || 'zcYHERfn5BYYppGYEfv8gIP9Pas';

module.exports = {
    serverPort,
    MongodbURL,
    clintURL,
    CloudinaryName,
    CloudinaryApiKey,
    CloudinaryApiSecret,
  };