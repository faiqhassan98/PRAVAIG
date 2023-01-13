const { carSch } = require('../models/car');


// get all cars
const getcars = async (req, res) => {
    try {
    const cars = await carSch.find();
    res.send(cars[0]);
    }
    catch (err){
        res.status(400).send(err)
    }
}

// get cars exterior color by id
const getcarcol = async (req, res) => {
    try {
        const carcolors = await carSch.findById(req.params.id);
        if (!carcolors) {
            res.status(404).send('Id not found')
        }
        else {
            const exColor = await carSch.find({
                "_id": req.params.id
            },
                {
                    exteriorcolors: {
                        "$elemMatch": {
                            "_id": req.body.exId
                        }
                    }
                })
            // const exColor = await carSch.find({
            //     'exteriorcolors': {
            //         id: req.body.exId
            //     }
            // })
            console.log(exColor)
            res.status(200).send(exColor)
        }

    }
    catch (err) {
        res.status(400).send(err)
    }

}

// get cars carbonedition data by color
const getcarbed = async (req, res) => {
    try {
        const carbcolor = await carSch.findById(req.params.id);
        if (!carbcolor) {
            res.status(404).send('Id not found');
        }
        else {
            const carbEd = await carSch.find({
                "_id": req.params.id
            },
                {
                    carbonedition:{
                        "$elemMatch":{
                            "color": req.body.carbED
                        }
                    }
                })
            console.log(carbEd)
            res.status(200).send(carbEd)
        }
    }

    catch (err) {
        res.status(400).send(err)
    }
}

// add cars
const carmod = async (req, res) => {
    try {
    const cardata = await carSch(req.body)
    await cardata.save();
    res.send(cardata);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// update cars data
const updcar = async (req, res) => {
    const updcar = await carSch.findByIdAndUpdate(
        req.params._id,
        {
            $set: req.body
        },
        {
            new: true,
            runValidators: false
        }
    );
    await updcar.save();
    console.log(updcar);
    res.send(updcar);
};

// cars delete by id
const delcars = async (req, res) => {
    const delcar = await carSch.findByIdAndDelete(req.params._id);
    console.log(delcar.id + ' is deleted ');
    res.send(delcar.id + ' is deleted ');
};


module.exports = {
    carmod,
    getcars,
    getcarcol,
    getcarbed,
    updcar,
    delcars
}