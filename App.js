//import dependencies
const express=require('express')

const dotenv=require('dotenv')

const mongoose=require('mongoose')

const bodyParser=require('body-parser')

const cors=require('cors')

//Routes path
const NewUser=require('./routes/User')
const NewPost=require('./routes/UserPost')
//Initilzation of App with all the required things
dotenv.config();

const App=express();

mongoose.connect(process.env.Connect_DB,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Database Successfully Connected!")
})

App.use(bodyParser.urlencoded({extended:true}))
App.use(express.json())
App.use(cors());

//Routing
App.use('/User',NewUser);
App.use('/UserPost',NewPost);

App.listen(5000,()=>{console.log("Surver is Up and Running")})