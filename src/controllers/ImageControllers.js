const Clients = require("../Models/aboutClientModel");
const Contibutions = require("../Models/aboutContibutionModel");
const AboutsTeam = require("../Models/aboutTeamModel");
const Blog = require("../Models/blogModel");
const Portfolio = require("../Models/portfolioModel");
const Images = require("../Models/slideModel");

//post slide data
const  getImages = async (req, res, next) => {
    try {
        const { title, categories, buttonText } = req.body;
        const url = req.files.map(file => `/images/photo/${file.filename}`);
    
        const images = new Images({ title, url, categories, buttonText });
        const saved = await  images.save();
    
        res.status(201).json({
          message: 'Slide uploaded successfully!',
          slide: saved
        });
      } catch (err) {
        res.status(400).json({
          message: 'Slide upload failed!',
          error: err.message
        });
      }
  
  }
//get slide data
const getImagesData = async (req, res, next) => {
    try {
        const images = await Images.find();
        res.status(200).json({
          message: 'Slides Data Find successfully!',
          images
        });
      } catch (err) {
        res.status(500).json({
          message: 'Failed to fetch data',
          error: err.message
        });
      }
  
  }

//portfolio
//post postfolio
const  getPortpolioImages = async (req, res, next) => {
    try {
        const { title, categories, buttonText } = req.body;
        const url = req.files.map(file => `/images/portfolio/${file.filename}`);
    
        const portfolioData = new Portfolio({ title, url, categories, buttonText });
        const saved = await  portfolioData.save();
    
        res.status(201).json({
          message: 'Portfolio  uploaded successfully!',
          slide: saved
        });
      } catch (err) {
        res.status(400).json({
          message: 'Slide upload failed!',
          error: err.message
        });
      }
  
  }
//get slide data
const getPortfolioData = async (req, res, next) => {
    try {
        const portfolioData = await Portfolio.find();
        res.status(200).json({
          message: 'Slides Data Find successfully!',
          portfolioData
        });
      } catch (err) {
        res.status(500).json({
          message: 'Failed to fetch data',
          error: err.message
        });
      }
  
  }
  // team
  //post 
const  getAboutPost = async (req, res, next) => {
    try {
        const { name, role } = req.body;
        const url = `/images/team/${req.file.filename}`;
        const AboutTeamData = new AboutsTeam({ name,role, url });
        const saved = await  AboutTeamData.save();
    
        res.status(201).json({
          message: 'Team data  uploaded successfully!',
          slide: saved
        });
      } catch (err) {
        res.status(400).json({
          message: ' upload failed! Try Again !',
          error: err.message
        });
      }
  
  }
//get 
const getAboutTeamData = async (req, res, next) => {
    try {
        const AboutTeamData = await AboutsTeam.find();
        res.status(200).json({
          message: 'Slides Data Find successfully!',
          AboutTeamData
        });
      } catch (err) {
        res.status(500).json({
          message: 'Failed to fetch data',
          error: err.message
        });
      }
  
  }
 // client
  //post 
const getAboutClientPost = async (req, res, next) => {
    try {
        const url = req.files.map(file => `/images/client/${file.filename}`);
        const AboutClientData = new Clients({url });
        const saved = await  AboutClientData.save();
    
        res.status(201).json({
          message: 'Client data  uploaded successfully!',
          AboutClientData: saved
        });
      } catch (err) {
        res.status(400).json({
          message: ' upload failed! Try Again !',
          error: err.message
        });
      }
  
  }
//get 
const getAboutClientData = async (req, res, next) => {
    try {
        const  AboutClientData = await Clients.find();
        res.status(200).json({
          message: 'Client Data Find successfully!',
          AboutClientData
        });
      } catch (err) {
        res.status(500).json({
          message: 'Failed to fetch data',
          error: err.message
        });
      }
  
  }

// Contibution
  //post 
const getAboutContibutiontPost = async (req, res, next) => {
    try {
        const url = req.files.map(file => `/images/contibution/${file.filename}`);
        const AboutContibutionData = new Contibutions({url });
        const saved = await AboutContibutionData.save();
    
        res.status(201).json({
          message: ' data  uploaded successfully!',
          AboutContibutionData: saved
        });
      } catch (err) {
        res.status(400).json({
          message: ' upload failed! Try Again !',
          error: err.message
        });
      }
  
  }
//get 
const  getAboutContibutionData = async (req, res, next) => {
    try {
        const  AboutContibutionData = await Contibutions.find();
        res.status(200).json({
          message: ' Data Find successfully!',
          AboutContibutionData
        });
      } catch (err) {
        res.status(500).json({
          message: 'Failed to fetch data',
          error: err.message
        });
      }
  
  }

  // Blog
  //post 
const getBlogPost = async (req, res, next) => {
    try {
        const { name, role } = req.body;
        const url = `/images/blog/${req.file.filename}`;
        const BlogData = new Blog({name,role,url });
        const saved = await BlogData.save();
    
        res.status(201).json({
          message: ' data  uploaded successfully!',
          BlogData: saved
        });
      } catch (err) {
        res.status(400).json({
          message: ' upload failed! Try Again !',
          error: err.message
        });
      }
  
  }
//get 
const  getBlogData = async (req, res, next) => {
    try {
        const BlogData = await Blog.find();
        res.status(200).json({
          message: ' Data Find successfully!',
          BlogData
        });
      } catch (err) {
        res.status(500).json({
          message: 'Failed to fetch data',
          error: err.message
        });
      }
  
  }


  module.exports = {
    getImages,
    getImagesData,
    getPortpolioImages,
    getPortfolioData,
    getAboutPost,
    getAboutTeamData,
    getAboutClientPost,
    getAboutClientData,
    getAboutContibutiontPost,
    getAboutContibutionData,
    getBlogPost,
    getBlogData
  };