const { wheelsSch } = require('../models/wheels');

// get all car Wheels
const getwheels = async (req, res) => {
    try {
        const carwheel = await wheelsSch.find();
        res.send(carwheel);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// add car wheels
const addwheels= async (req, res) => {
    try {
        const carwheel = await wheelsSch(req.body)
        await carwheel.save();
        res.send(carwheel);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    getwheels,
    addwheels
}