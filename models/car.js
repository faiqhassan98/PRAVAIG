const mongoose = require('mongoose');

const carSch = mongoose.model('Cars', new mongoose.Schema(
    {
    models: [{
        car: {
            type: String,
            required: true
        },
        price: {
            type: String,
            default:"39,50,000",
            required: true
        },
        code: {
            type: String,
            required: true
        }
    }],
    exteriorcolors: [{
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
            // ref: "Wheels",
            required: true
        },
        code: {
            type: String,
            required: true
        }
    }],
    interiorcolors: {
        type: [String],
        required: true
    },
    carbonedition: [{
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
        code: {
            type: String,
            required: true
        }
    }],
    wheels: {
        type: [String],
        ref: "Wheels",
        required: true
    },
    addons: {
        basic: [
            {
                title: {
                    type: String,
                    required: true
                },
                price: {
                    type: String,
                    required: true
                },
                description:{
                    type: String,
                    required: true
                }
            }
        ],
        advance: [
            {
                title: {
                    type: String,
                    required: true
                },
                subTitle: {
                    type: String,
                    required: true
                },
                description:{
                    type: String,
                    required: true
                },
                code: {
                    type: String,
                    required: true
                },
                options: [
                    {
                        title: {
                            type: String,
                            required: true
                        },
                        price: {
                            type: String,
                            required: true
                        },
                        description:{
                            type: String,
                            required: true
                        },
                        code: {
                            type: String,
                            required: true
                        }
                    },
                ],
            },
        ]
    }
}));

exports.carSch = carSch;