
const multer = require("multer");
const path = require("path");
const fs = require('fs');
const { SlideImages, PortfolioImages, TeamImage, ClientImage, ContibutionImage, BlogImageDir } = require("../secret");

// Set up Multer for file uploads -slider image for home
const SlideImages_DIR = SlideImages
if (!fs.existsSync(SlideImages_DIR)) {
  fs.mkdirSync(SlideImages_DIR);
}
const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null,SlideImages_DIR)
        
    },
    filename: function(req, file, cb) {

        const extname = path.extname(file.originalname);
        cb(null,Date.now()+'-'+ file.originalname)
      //cb(null, `${Date.now()}-${file.originalname}`); 
    },
  });
  
  const uploadImage = multer({ storage });


// portfolio images

const UPLOAD_PORTFOLIO_IMAGES =PortfolioImages 

if (!fs.existsSync(UPLOAD_PORTFOLIO_IMAGES)) {
  fs.mkdirSync(UPLOAD_PORTFOLIO_IMAGES );
}

const PORTFOLIO_IMAGES  = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,UPLOAD_PORTFOLIO_IMAGES )
    
},
filename: function(req, file, cb) {

    const extname = path.extname(file.originalname);
    cb(null,Date.now()+'-'+ file.originalname)
 
},
});

const PortfolioImage = multer({ storage: PORTFOLIO_IMAGES });
//Team Image
const UPLOAD_TEAM_IMAGE =TeamImage

if (!fs.existsSync(UPLOAD_TEAM_IMAGE)) {
  fs.mkdirSync(UPLOAD_TEAM_IMAGE );
}

const TEAM_IMAGE = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,UPLOAD_TEAM_IMAGE )
    
},
filename: function(req, file, cb) {

    const extname = path.extname(file.originalname);
    cb(null,Date.now()+'-'+ file.originalname)
 
},
});

const AboutTeamImage = multer({ storage: TEAM_IMAGE });
// Client Images
const UPLOAD_CLIENT_IMAGE =ClientImage

if (!fs.existsSync(UPLOAD_CLIENT_IMAGE)) {
  fs.mkdirSync(UPLOAD_CLIENT_IMAGE);
}

const CLIENT_IMAGE = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,UPLOAD_CLIENT_IMAGE )
    
},
filename: function(req, file, cb) {

    const extname = path.extname(file.originalname);
    cb(null,Date.now()+'-'+ file.originalname)
 
},
});

const AboutClientImage = multer({ storage: CLIENT_IMAGE });
// Contibution Images
const UPLOAD_CONTIBUTION_IMAGE =ContibutionImage

if (!fs.existsSync(UPLOAD_CONTIBUTION_IMAGE)) {
  fs.mkdirSync(UPLOAD_CONTIBUTION_IMAGE);
}

const CONTIBUTION_IMAGE = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,UPLOAD_CONTIBUTION_IMAGE )
    
},
filename: function(req, file, cb) {

    const extname = path.extname(file.originalname);
    cb(null,Date.now()+'-'+ file.originalname)
 
},
});

const AboutContibutionImage = multer({ storage: CONTIBUTION_IMAGE });

// Contibution Images
const UPLOAD_BLOG_IMAGE =BlogImageDir

if (!fs.existsSync(UPLOAD_BLOG_IMAGE)) {
  fs.mkdirSync(UPLOAD_BLOG_IMAGE);
}

const BLOG_IMAGE = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,UPLOAD_BLOG_IMAGE )
    
},
filename: function(req, file, cb) {

    const extname = path.extname(file.originalname);
    cb(null,Date.now()+'-'+ file.originalname)
 
},
});

const BlogImage= multer({ storage: BLOG_IMAGE });



module.exports ={uploadImage,PortfolioImage,AboutTeamImage,AboutClientImage,AboutContibutionImage,BlogImage} ;