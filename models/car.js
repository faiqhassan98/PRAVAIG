const mongoose = require('mongoose');

const carSch = mongoose.model('Cars', new mongoose.Schema({
    models: [{
        car: {
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
        }
    }],
    wheels: {
        type: [String],
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
                        }
                    },
                ],
            },
        ]
    }
    // addons: {
    //     cocoonPackage: {
    //         type: String,
    //         default: null
    //     },
    //     scentingPackage: {
    //         type: String,
    //         default: null
    //     },
    //     heatingPackage: {
    //         type: String,
    //         default: null
    //     },
    //     fluffycarpetsPackage: {
    //         type: String,
    //         default: null
    //     },
    //     thickveganLeather: {
    //         type: String,
    //         default: null
    //     },
    //     wheelaeroCovers: {
    //         type: String,
    //         default: null
    //     },
    //     tyrerepairKit: {
    //         type: String,
    //         default: null
    //     },
    //     homefastCeramic: {
    //         type: String,
    //         default: null
    //     },
    //     ppfCeramic: {
    //         type: String,
    //         default: null
    //     },
    //     softcloseDoors: {
    //         type: String,
    //         default: null
    //     },
    //     connectivityPackage: {
    //         twoyears: {
    //             type: String,
    //             default: null
    //         },
    //         fouryears: {
    //             type: String,
    //             default: null
    //         }
    //     },
    //     maintenancePackage: {
    //         twoyears: {
    //             type: String,
    //             default: null
    //         },
    //         fouryears: {
    //             type: String,
    //             default: null
    //         }
    //     }
    // }
}));

exports.carSch = carSch;