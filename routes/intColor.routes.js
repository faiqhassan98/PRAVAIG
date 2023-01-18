const express = require("express");
const router = express.Router();

const controllerintColor = require('../controllers/intColor.controller');
router.get('/', controllerintColor.getintColor);
router.post('/addintcolor', controllerintColor.addintColor)

module.exports = router