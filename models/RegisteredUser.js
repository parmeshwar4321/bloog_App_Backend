const mongoose=require('mongoose')
const NewUserSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },

    username:{
        type:String,
        required:true,
        min:6
    },
    email:{
        unique:true,
        type:String,
        required:true,
        min:6
    },
    password:{
        type:String,
        required:true,
        min:6
    }
},
{
    timestamps:true
});

module.exports=mongoose.model('Blogger',NewUserSchema);