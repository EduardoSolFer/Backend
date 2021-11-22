const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const path = require('path');

//settings
app.set('port', process.env.PORT || 3000);
require('./database')

//static files
app.use(express.static(path.join(__dirname,'public')))

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes


//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    
});