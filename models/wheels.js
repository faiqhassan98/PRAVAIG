const mongoose = require('mongoose');

const wheelsSch = mongoose.model('Wheels', new mongoose.Schema({
        mainImage: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        }
}));

exports.wheelsSch = wheelsSch;