const express = require('express');
const { getPortpolioImages, getImages, getImagesData, getPortfolioData, getAboutPost, getAboutTeamData, getAboutClientPost, getAboutClientData, getAboutContibutiontPost, getAboutContibutionData, getBlogPost, getBlogData } = require('../controllers/ImageControllers');
const { memoryUpload } = require('../midlewares/upload');

const imageRouter = express.Router();


imageRouter.post(
  '/images',memoryUpload.array('url',),
  getImages
);

//find image data route
imageRouter.get(
  '/images/data',
  getImagesData
);
// Portfolio Image Upload Route
imageRouter.post(
  '/portfolio',
  memoryUpload.array('url',),
  getPortpolioImages
);
//find portfolio data route
imageRouter.get(
  '/portfolio/data',
  getPortfolioData
);

//about -team-
imageRouter.post(
  '/about/team',memoryUpload.single('url',),
  getAboutPost
);
imageRouter.get(
  '/about/team/data',
  getAboutTeamData
);

//about client-post
imageRouter.post(
  '/about-client',memoryUpload.array('url',),
  getAboutClientPost
);
//about client get
imageRouter.get(
  '/about-client/data',
  getAboutClientData
);

//about contibution-post
imageRouter.post(
  '/about-contibution',memoryUpload.array('url',),
  getAboutContibutiontPost
);
//about contibution get
imageRouter.get(
  '/about-contibution/data',
  getAboutContibutionData
);

// blog post
/*
imageRouter.post(
  '/blog',memoryUpload.single('url',),
  getBlogPost
);*/
imageRouter.post(
  '/blog',memoryUpload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
    { name: 'img4', maxCount: 1 },
    { name: 'img5', maxCount: 1 },
    { name: 'img6', maxCount: 1 },
  ]),
  getBlogPost
);
//get blog
imageRouter.get(
  '/blog/data',
  getBlogData
);

module.exports = imageRouter;