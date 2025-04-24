require('dotenv').config();
const serverPort = process.env.SERVER_PORT || 3003;
const MongodbURL = process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/mahdi';
const clintURL = process.env.CLINT_URL || '';
const SlideImages = process.env.UPLOAD_FILE_IMAGES||"public/images/photo";
const PortfolioImages = process.env.UPLOAD_FILE_IMAGES_PORTFOLIO||"public/images/portfolio";
const TeamImage = process.env.UPLOAD_FILE_IMAGES_TEAM||"public/images/team";
const ClientImage = process.env.UPLOAD_FILE_IMAGES_CLIENT||"public/images/client";
const ContibutionImage = process.env.UPLOAD_FILE_IMAGES_CONTIBUTION||"public/images/contibution";
const BlogImageDir = process.env.UPLOAD_FILE_IMAGES_BLOG||"public/images/blog";
module.exports = {
    serverPort,
    MongodbURL,
    clintURL,
    SlideImages,
    PortfolioImages,
    TeamImage,
    ClientImage ,
    ContibutionImage,
    BlogImageDir
  };