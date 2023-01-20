const express = require("express");
const router = express.Router();

const controllerintColor = require('../controllers/intColor.controller');
router.get('/', controllerintColor.getintColor);
router.post('/addintcolor', controllerintColor.addintColor);
router.patch('/intcolor/:id', controllerintColor.updateInteriorColor);


module.exports = router