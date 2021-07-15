const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


//import routes

const postRoutes = require('./routes/post');
const staticRoutes = require('./routes/static');
// const aboutRoutes = require('./routes/about');





//app
const app = express();

//db
mongoose
.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
})
.then(() => console.log('db connected'))
.catch(err => console.log(err));


//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());


//route middlewre
app.use('/api', postRoutes);
app.use('/api', staticRoutes);
// app.use('/api', aboutRoutes);









//port
const port= process.env.PORT||8000
app.listen(port,() => console.log(`Server is running on port ${port}`));

