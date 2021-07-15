const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema


const staticSchema = new mongoose.Schema({
   
  
    title: {
    type:String,
    min: 3,
    max: 160,
    default:'Admin'
    // required:true,
    // trim:true,
},

// slug:{
//     type:String,
//     unique:true,
//     index:true,
//     lowercase:true,
// },


content:{

    type:{},
    trim:true,
    required: true,
    min:10,
    max:2000,
},





user:{
    type: String,
    default:'Admin'
}



}, {timestamps: true});

module.exports = mongoose.model('Static', staticSchema)