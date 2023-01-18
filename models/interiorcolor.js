const mongoose = require('mongoose');

const intColorSch = mongoose.model('intColor', new mongoose.Schema({
        color: {
            type: String,
            required: true
        },
        mainImage: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        }
}));

exports.intColorSch = intColorSch;