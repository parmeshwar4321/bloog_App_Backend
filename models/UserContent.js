const mongoose=require('mongoose')

const Posts=mongoose.Schema(
    {
        Post:{
            type:String,
            require:true,
        },
        clap:{
            type:Number
        }
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model('UserPost',Posts)