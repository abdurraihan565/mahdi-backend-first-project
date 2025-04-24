const express = require('express');
const { getImages, getImagesData, getPortpolioImages, getPortfolioData, getAboutPost, getAboutTeamData, getAboutClientPost, getAboutClientData, getAboutContibutiontPost, getAboutContibutionData, getBlogPost, getBlogData } = require('../controllers/ImageControllers');
//const { uploadImage, PortfolioImage, AboutTeamImage, AboutClientImage, AboutContibutionImage, BlogImage } = require('../midelwares/uploadFile');
const { uploadImage, PortfolioImage, AboutTeamImage, AboutClientImage, AboutContibutionImage, BlogImage } = require('../midlewares/upload');

const imageRouter = express.Router();

imageRouter.post(
  '/images',uploadImage.array('url',),
  getImages
);

//find image data route
imageRouter.get(
  '/images/data',
  getImagesData
);

//portfolio-
imageRouter.post(
  '/portfolio',PortfolioImage.array('url',),
  getPortpolioImages
);
//find portfolio data route
imageRouter.get(
  '/portfolio/data',
  getPortfolioData
);

//about -team-
imageRouter.post(
  '/about/team',AboutTeamImage.single('url',),
  getAboutPost
);
imageRouter.get(
  '/about/team/data',
  getAboutTeamData
);

//about client-post
imageRouter.post(
  '/about-client',AboutClientImage.array('url',),
  getAboutClientPost
);
//about client get
imageRouter.get(
  '/about-client/data',
  getAboutClientData
);

//about contibution-post
imageRouter.post(
  '/about-contibution',AboutContibutionImage.array('url',),
  getAboutContibutiontPost
);
//about contibution get
imageRouter.get(
  '/about-contibution/data',
  getAboutContibutionData
);

// blog post
imageRouter.post(
  '/blog',BlogImage.single('url',),
  getBlogPost
);
//get blog
imageRouter.get(
  '/blog/data',
  getBlogData
);

module.exports = imageRouter;