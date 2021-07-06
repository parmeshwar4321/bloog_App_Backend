//import dependencies
require('./db/db')
const express = require('express')
require('dotenv').config()

const passport = require('passport');


// const bodyParser=require('body-parser')      

const Port = process.env.PORT||2021
const App = express();

const NewUser = require('./routes/User')
const NewPost = require('./routes/UserPost')

// App.use(passport.initialize());
App.use(express.json())
    // App.use('/',require('./routes/User'))
    // const cors=require('cors')
    // App.use(bodyParser.urlencoded({extended:true}))
    // App.use(cors());

App.use('/', NewUser);
App.use('/', NewPost);

App.listen(Port, () => { console.log(`Server is running at ${Port}`); })