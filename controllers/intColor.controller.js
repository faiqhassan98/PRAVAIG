const { intColorSch } = require('../models/interiorcolor');

// get all car interior
const getintColor = async (req, res) => {
    try {
        const intColors = await intColorSch.find();
        res.send(intColors);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// add car interior
const addintColor = async (req, res) => {
    try {
        const intColors = await intColorSch(req.body)
        await intColors.save();
        res.send(intColors);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    getintColor,
    addintColor
}