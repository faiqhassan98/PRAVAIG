const mongoose = require('mongoose');

const carSum = mongoose.model('Summary', new mongoose.Schema(
    {
        car_id:[{
            model:{
                type: [String],
                required: true
            },
            exteriorColor:{
                type: [String],
                required: true
            }
        }]
    }
))

exports.carSum = carSum;