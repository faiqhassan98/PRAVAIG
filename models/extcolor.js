const mongoose = require('mongoose');

const extColorSch = mongoose.model('extColor', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    mainImage: {
        type: String,
        required: true
    },
    wheels: {
        type: [String],
        required: true
    },
    price: {
        type: String,
        default: "0"
    },
    code: {
        type: String,
        required: true
    }
}));

exports.extColorSch = extColorSch