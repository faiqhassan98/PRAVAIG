const express = require("express");
const router = express.Router();

const controllerWheels = require('../controllers/wheel.controller');
router.get('/', controllerWheels.getwheels);
router.post('/addwheels', controllerWheels.addwheels)

module.exports = router