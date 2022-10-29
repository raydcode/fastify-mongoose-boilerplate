
const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    items:{
        type:Array,
    }
})



module.exports = mongoose.model("Lists",ListSchema)