const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.Db_Name
const co = mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (er, data) => {

    if (er) return er;
    else { console.log("DB connected") };
})

// module.exports