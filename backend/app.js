const express = require('express')
const app = express();
const bodyParser  = require('body-parser');
const mongoose   = require('mongoose');
const port = process.env.PORT || 8080;
const router = require("./router");

const moment = require('moment')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// all requests

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path} - ${moment().format(moment.HTML5_FMT.DATETIME_LOCAL_MS)}`);
    next();
});

app.use("/api",router);
mongoose.connect('mongodb://localhost:27017/pim');
// start server

app.listen(port, function () {
    console.log('API andando con express...');
});
