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

app.use('/api/cars', carRouter);
app.use('/api/upload', express.static('upload'));

app.use(
    bodyParser.json({
      limit: '50mb',
    }),
  );
  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      parameterLimit: 100000,
      extended: true,
    }),
  );
>>>>>>> c5efdddc27fb73660c8934b688d5c71aa006e35f



// mongoose.connect('mongodb://localhost/pravaig')
mongoose.connect('mongodb+srv://pravaig:pravaig12345@pravaig-cluster.kkbxfni.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.listen(port, () => {
    console.log('server is running at ' + port);
})
