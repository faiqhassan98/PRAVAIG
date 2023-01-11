const mongoose = require('mongoose');

const fileupl = mongoose.model('Images', new mongoose.Schema({
    images: {
        type: [String],
        required: true
    },
    color:{
        type: String,
        required: true
    }
}));

exports.fileupl = fileupl;