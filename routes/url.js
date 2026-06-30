const express = require("express");
const {handleGenerateShortURL, handleRedirectToMainUrl, handleGetAnalytics}=require('../controllers/url')
const router = express.Router();

router.post('/',handleGenerateShortURL)
router.get('/:shortId',handleRedirectToMainUrl)
router.get('/analytics/:shortId',handleGetAnalytics)

module.exports=router;

