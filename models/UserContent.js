const mongoose = require('mongoose')

const Posts = mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true,
        },  
        like: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('bloggerPost', Posts)