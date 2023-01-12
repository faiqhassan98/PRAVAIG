const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3700;
const path = require('path');
const multer = require('multer');
const fs = require("fs");
const bodyParser = require('body-parser')
const carRouter = require("./routes/car.routes");
const colorsRouter = require("./routes/color.routes");
const { fileupl } = require('./models/color');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//enable cors
app.use(cors());

app.use('/cars', carRouter);
app.use('/upl', colorsRouter);
app.use('/upload', express.static('upload'));



// mongoose.connect('mongodb://localhost/pravaig')
mongoose.connect('mongodb+srv://pravaig:pravaig12345@pravaig-cluster.kkbxfni.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.listen(port, () => {
    console.log('server is running at ' + port);
})