const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();
const multer = require('multer');
const { CloudinaryName, CloudinaryApiKey, CloudinaryApiSecret } = require('../secret');
// Multer memory storage for Cloudinary
const storage = multer.memoryStorage();
const memoryUpload = multer({ storage }); // Use this for all image uploads
// Cloudinary configuration
cloudinary.config({
  cloud_name:CloudinaryName,
  api_key:CloudinaryApiKey,
  api_secret:CloudinaryApiSecret,
});

// Function to upload image to Cloudinary
const uploadToCloudinary = (file, folderName) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: folderName },  // Cloudinary folder
      (error, result) => {
        if (error) reject(error);
        else resolve(result.secure_url);  // Returns Cloudinary image URL
      }
    ).end(file.buffer);
  });
};

module.exports = { memoryUpload, uploadToCloudinary };

