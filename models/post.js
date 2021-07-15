const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema


const postSchema = new mongoose.Schema({
   


    
    title: {
    type:String,
    trim:true,
    min: 3,
    max: 160,
    required:true
},

slug:{
    type:String,
    unique:true,
    index:true,
    lowercase:true

},

content:{

    type:{},
    trim:true,
    required: true,
    min:10,
    max:200,
},

user:{
    type: String,
    default:'Admin'
}



}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema)